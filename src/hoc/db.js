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
        deleteOld(){
            const time = Date.now() -  (2 * 60 * 60 * 1000);
            this.dbRef.orderBy('timestamp').where("timestamp", "<", time)
                .onSnapshot(function(querySnapshot){
                    querySnapshot.forEach(function(doc){
                        firebase.collection('expense-log').doc(`${doc.id}`).delete();
                    })
                })
        };

        sendMessage = (msg) => {
            const {user} = this.props;
            const newMsg = {
                name: user.name || 'Guest',
                color: user.color || '#000000',
                message: msg,
                timestamp: new Date().getTime()
            };
            this.dbRef.add(newMsg);
        }


        render(){
            return <WrappedComponent {...this.props} sendMessage={this.sendMessage}/>
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

