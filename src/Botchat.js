import React from 'react';
import './App.css';

const Botchat = (props) => (
    <div>
        <div className="bot-chat">
            <img src={require("./Sawal.png")} className="logo-chat"/>
            <span style={{color:'#31B0D5',position:'relative',bottom:'5px',marginLeft:'10px'}}>SawalBot</span>
        </div>
        <p className="bot-chat-text">
            {props.content}
        </p>
    </div>
);

export default Botchat;