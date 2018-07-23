import React, {Component} from 'react';
import firebase from '../firebase';
import {connect} from 'react-redux';
import {updateChatMessages} from "../actions";

export default (WrappedComponent) => {
    class Db extends Component {
        componentDidMount(){
            firebase.collection('chat-log').onSnapshot(this.props.updateChatMessages);
            }


        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapsStateToProps(state) {
        return{
            messages: state.chat.messages
        }
    }

    return connect(mapsStateToProps, {updateChatMessages})(Db);
}