import React, {Component} from 'react';
import './Footer.css';
export class Footer extends Component {
  render(){
    const year = new Date().getFullYear();
    return (   
        <footer className="App-Footer">
          @copyright {year}      
        </footer>   
    );
  }
}