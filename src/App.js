import React, { Component } from 'react';
import './App.css';
import Field from './components/field';
import StartModal from './components/startModal';
import EndModal from './components/endModal';

class App extends Component {
    state ={
      StartModalShow : true,
      EndModalShow : false,
      StartShow : false,
      AnimalCount : 2, // modal-StartModal, animal, modal-EndModal로 전달됨
      Animal : [
        { 
          id : 0,
          name : '토끼',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 1,
          name : '거북이',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 2,
          name : '사자',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 3,
          name : '개구리',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 4,
          name : '게',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 5,
          name : '상어',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
      ]

  }
  _IncreaseAnimal = () => { // modal-StartModal로 전달됨.
      this.state.AnimalCount < 6 ?
        (this.setState({
              AnimalCount : this.state.AnimalCount + 1}))
          :(this.setState({
              AnimalCount : 6}))

  }
  _DecreaseAnimal = () => { // modal-StartModal로 전달됨.
      this.state.AnimalCount > 2 ?
          (this.setState({
              AnimalCount : this.state.AnimalCount - 1}))
          :(this.setState({
              AnimalCount : 2}))
  }
  _StartShow = () => {
          this.setState({
              StartModalShow : false, // Start-modal 퇴장
              StartShow : true // Start 컴포넌트 등장
          })
  }
  _AnimalCreate = () => {
    const { Animal } = this.state;
    
  }
  render() {
    return (
      <div className="App">
        <Field Animal={this.state.Animal}/>
        {(this.state.StartModalShow === true) && <StartModal AnimalCount={this.state.AnimalCount} IncreaseAnimal={this._IncreaseAnimal} DecreaseAnimal={this._DecreaseAnimal} StartShow={this._StartShow}/>}
        {(this.state.EndModalShow === true) && <EndModal />}
        <div className="StartWrap">
          {(this.state.StartShow === true) && (<Start />)}
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
