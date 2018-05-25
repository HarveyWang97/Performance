import React, { Component } from 'react';
import Botchat from './Components/Botchat';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import 'normalize.css';


let now = new Date();
const dateFormat = require('dateformat');
now = dateFormat(now, "mmmm dS, yyyy");

class App extends Component {
  render() {
    return (
      <div class="wrapper">
            <Sidebar />
            <div id="content">

                    <Navbar />

                    <h4><span>{now.toString()}</span></h4>

                    <Botchat 
                        content=" Based on 17 reviews this month, you have a recommendation of 9 of 10 points"
                    />
                                    
                    <Botchat 
                        content=" u have a recommendation of 9 of 10 points"
                    />

                    <button type="button" class="btn btn-primary" id="score-btn">
                        <span style={{fontSize:'24px'}}>Sawal score: 8.5</span>
                    </button>

                    <Botchat 
                        content=" u have a recommendation of 9 of 10 points"
                    />
     
                    <Botchat 
                        content=" u have a recommendation of 9 of 10 points"
                    />    
            </div>
            
      </div> 


    );
  }
}

export default App;
