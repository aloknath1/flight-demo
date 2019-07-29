import React from 'react';
//import { Switch, Route } from "react-router-dom";
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
   
   this.state = {
     data : null
   };

this.handleUpdate = this.handleUpdate.bind(this);
  
  }
  
  componentWillMount(){
console.log("inside handleGetJson");
  fetch('./app.json').then(response => {          
          return response.json();
        }).then(data => {        
          this.setState({data});
        }).catch(err => {
         
          console.log("Error Reading data " + err);
        });
  }

handleUpdate() {
  console.log('handle update mtd is called');
  return false;
}

  render(){
     const flights = this.state.data;
    
    return (
      <div className="App">
        <Header />
        <div className="app-body">
      
         <table className="table">           
           {            
             flights && flights.map(function(d, idx){
              return (
                <tr key={idx}>
                  <td><input type="checkbox" /></td>
                  <td>{d.name}<br/>{d.start} - {d.end}</td>
                  <td>{d.start_place} - {d.end_place} <br/> {d.start_time} - {d.end_time}</td>
                  <td>{d.flight_time} , <br/>Fri 5 apr</td>
                  <td>{d.status}</td>
                  <td><button >update</button></td>
                </tr>
                )
              })
             }
            
         </table>
        </div>

        <Footer/>
      </div>
    );
  }
}