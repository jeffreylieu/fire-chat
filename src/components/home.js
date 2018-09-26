import React from 'react';
import {Link} from "react-router-dom";

export default props =>{
    return(
        <div>
            <h1 className="center">Fire Chat App</h1>
            <h2 className="center">"This App is for educational purposes only, Messages delete automatically every 1hr"</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <Link to="/chat-room" className="btn green">Chat Room</Link>
                </div>
            </div>
        </div>
    )
}