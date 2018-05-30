import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Main from './component/main'
import SignUp from "./component/login/signUp";
import Users from './component/users/user'
import firebase from 'firebase';

class App extends Component {



  render() {


    return (
        <BrowserRouter>
      <div className="App">
          {/*<Route  component={Main}/>*/}

          <Users/>

      </div>
        </BrowserRouter>
    );
  }
}

export default App;
