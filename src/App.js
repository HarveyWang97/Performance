import React, { Component } from 'react';
import './App.css';
import Botchat from './Botchat';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
           <Sidebar />
            <div id="content">
                   
                    <Navbar />
                    
                    <div class="line" />

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
