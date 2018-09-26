import React from 'react';
import db from '../hoc/db';
import MessageInput from './message_input';
import {Link} from "react-router-dom";


const ChatRoom = props =>{
    const messageElements = props.messages.map( msg => {
        return (
            <li key={msg.id} className="collection-item row">
                <div className="col s1">
                    <b style={{
                        color: msg.color
                    }}>{msg.name}:</b>
                </div>
                <div className="col s11">
                    {msg.message}
                </div>
                <div className="deletebutton">
                    <button className="btn btn-link" onClick={() => props.removeMessage(msg)}>Delete</button>
                </div>
            </li>
        )
    });
    return(
        <div>

            <h1 className="center">Chat Room</h1>
            <MessageInput send={props.sendMessage}/>
            <div>
                <Link to="/choose-name" className="btn red">Change Name</Link>
            </div>
            <ul className="collection">
                {messageElements}
            </ul>

        </div>

    );
}

export default db(ChatRoom);
