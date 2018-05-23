import React from 'react';
import ReactDOM from 'react-dom';
import Feedback_chat from './Feedback_chat';
//import './App.css';

export default class Sidebar extends React.Component {

    state = {
        chat_active:false
    }

    constructor(props){
        super(props);
        
        this.toggleChat = this.toggleChat.bind(this);
    }

    toggleChat() {
        const chat_active = !this.state.chat_active;
        this.setState(() => ({chat_active:chat_active}));
    }
    
    render(){
        return (
            <nav id="sidebar">
                        <div className="sidebar-header">
                          <button type="button" className="btn btn-dark" id="search-btn">Searching Something....</button>
                        </div>
        
                        <div className="list-group" id="sidebar_list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active sidebar-item"  
                                data-toggle="list" href="#" role="tab" aria-controls="home">
                                My performance
                            </a>
                            <a className="list-group-item list-group-item-action sidebar-item"  data-toggle="list" href="#" role="tab" aria-controls="profile">
                                Projects
                            </a>
                            <a className="list-group-item list-group-item-action sidebar-item"  
                                data-toggle="list" href="#" role="tab" aria-controls="messages"
                                onClick={this.toggleChat}
                            >
                                1:1 Feedback
                            </a>
                        </div>

                        <div className={this.state.chat_active?'show':'hidden'}>
                            <Feedback_chat />
                        </div>

            </nav>
        );
    }
}
