import React from 'react';
import ReactDOM from 'react-dom';
//import './App.css';

const Navbar = (props) => (

    <nav class="navbar navbar-default">
        
            <div class="navbar-header">
                <img src={require("../Pictures/sidebar_icon.png")} id="sidebarCollapse" className="sidebar" />
            </div>
        
            <img src={require("../Pictures/Sawal.png")} 
                className="logo"
            />                           
            <span 
                style={{color:'blue',paddingTop:'0px',color:'grey',fontSize:'20px'}}
                className="navbar-right"
            >
                New Feedback 
            </span>
        
    </nav>
);

export default Navbar;
