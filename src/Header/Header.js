import React, {Component} from 'react';
import './Header.css';
export class Header extends Component {
  render(){
    return (   
        <header className="App-header">
          <div className="left">
              <p className="logo">Honeywell</p>
              <p className="sup"> The Power of Connected</p>
          </div> 
          <div className="right"><p> | Flight plan list - Option b </p></div>
        </header>   
    );
  }
}