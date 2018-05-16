import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Sidebar = (props) => (
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
                    <a className="list-group-item list-group-item-action sidebar-item"  data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">
                        1:1 Feedback
                    </a>
                </div>
    </nav>
);

export default Sidebar;
