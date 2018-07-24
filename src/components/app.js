import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.css';
import {Route} from 'react-router-dom';
import ChatRoom from './chat_room';
import Home from './home';
import ChooseName from './choose_name';
import Nav from './nav';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/chat-room" component={ChatRoom}/>
            <Route path="/choose-name" component={ChooseName}/>
        </div>
    </div>
);

export default App;
