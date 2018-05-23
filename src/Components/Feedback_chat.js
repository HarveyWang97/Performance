import React from 'react';
import ReactDOM from 'react-dom';

const Feedback_chat = (props) => (
    <div>
        <div className="friend">
            <img src={require("../Pictures/character.jpg")} />
            <p>
                <div className="chatName">Salman | Symantec</div>
                <div className="chatAbbr">
                    I really liked your wor...
                </div>
            </p>
        </div>

        <div className="friend">
            <img src={require("../Pictures/character.jpg")} />
            <p>
                <div className="chatName">Salman | Symantec</div>
                <div className="chatAbbr">I really liked your wor..</div>
            </p>
        </div>
    </div>
);

export default Feedback_chat;