import React from 'react';
import {Link} from "react-router-dom";

export default props =>{
    return(
        <div>
            <h1 className="center">Fire Chat App</h1>
            <h4 className="center">This App is for educational purposes only. This Chat App is made with Firebase firestore. It enables you to create name for your message entry and choose a color to highlight your name. Your messages can be deleted manually with the delete button or if left in chat, deletes every two hours. </h4>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Link to="/chat-room" className="btn green">Chat Room</Link>
                </div>
            </div>
        </div>
    )
}