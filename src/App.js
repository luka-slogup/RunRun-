import React, { Component } from 'react';
import './App.css';
import Field from './components/field';
import Modal from './components/modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Field />
        <Modal />
        <div className="StartWrap">
          <Start />
        </div>
      </div>
    );
  }
}

class Start extends Component{
  render(){
      return(
          <div className="Start">
              <h1>Start!</h1>
          </div>
    );
  }
}

export default App;
