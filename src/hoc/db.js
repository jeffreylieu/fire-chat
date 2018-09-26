import React, {Component} from 'react';
import firebase from '../firebase';
import {connect} from 'react-redux';
import {updateChatMessages} from "../actions";

export default (WrappedComponent) => {
    class Db extends Component {
        dbRef = firebase.collection('chat-log')


        componentDidMount(){
            this.deleteOld();
            this.dbRef.orderBy('timestamp').onSnapshot(this.props.updateChatMessages);
        }


        sendMessage = (msg) => {
            const {user} = this.props;
            const newMsg = {
                name: user.name || 'Guest',
                color: user.color || '#000000',
                message: msg,
                timestamp: new Date().getTime()
            };
            this.dbRef.add(newMsg);
        };

        removeMessage = (msg) => {
            console.log(this.dbRef.doc(msg.id));
            this.dbRef.doc(msg.id).delete();
        }
        // put debugger here and look through what this function is and does. 2 * 60 *
        deleteOld(){
            const time = Date.now() -  (60 * 1000);
            this.dbRef.orderBy('timestamp').where("timestamp", "<", time)
                .onSnapshot(function(querySnapshot){
                    querySnapshot.forEach(function(msg){
                        firebase.collection('chat-log').doc(`${msg.id}`).delete();
                    })
                })
        };


        render(){
            return <WrappedComponent {...this.props} removeMessage={this.removeMessage} sendMessage={this.sendMessage}/>
        }
    }

    function mapsStateToProps(state) {
        return{
            messages: state.chat.messages,
            user: state.chat.user
        }
    }

    return connect(mapsStateToProps, {updateChatMessages})(Db);
}

