import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Add from './components/Add';
import Table from './components/Table';
import Edit from './components/Edit';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <BrowserRouter>
      
      <Route path="/" exact component={Signup}/>
      <Route path="/login" render={props => <Login {...props}/>}/>
      <Route path="/home" render={props => <Home {...props}/>}/>
      <Route path="/add" render={props => <Add {...props}/>}/>
      <Route path="/table" render={props => <Table {...props}/>}/>
      <Route path="/edit/:id" render={props => <Edit {...props}/>}/>
      </BrowserRouter>
    );
  }
}

export default App;