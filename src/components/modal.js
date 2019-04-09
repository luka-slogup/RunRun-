import React, {Component} from 'react';
import '../style/_modal.scss';

class Modal extends Component{
    state ={
        StartModalShow : true,
        EndModalShow : false,
    }
    render(){
        return(
            <div className="Modal">
                {this.state.StartModalShow === true && (<StartModal />)}
                {this.state.EndModalShow === true && (<EndModal />)}
            </div>
        )
    }
}

class StartModal extends Component{
    state ={
        AnimalCount : 2,
    }
    _IncreaseAnimal = ()=>{
        this.state.AnimalCount < 6 ?
           (this.setState({
                AnimalCount : this.state.AnimalCount + 1}))
            :(this.setState({
                AnimalCount : 6}))

    }
    _DecreaseAnimal = ()=>{
        this.state.AnimalCount > 2 ?
            (this.setState({
                AnimalCount : this.state.AnimalCount - 1}))
            :(this.setState({
                AnimalCount : 2}))
    }
    render(){
        return(
            <div className="StartModal">
                시작모달
                {/* <form onSubmit={this._handleSubmit}> */}
                    <div>동물숫자 : {this.state.AnimalCount} </div>
                    <button onClick={this._IncreaseAnimal}>+</button>
                    <button onClick={this._DecreaseAnimal}>-</button>
                    <input type="checkBox"/>
                    <label>장애물 추가</label>
                    {/* <button type="submit">설정끝!</button> */}
                {/* </form> */}
            </div>
        )
    }
}


class EndModal extends Component{
    render(){
        return(
            <div className="EndModal">
            끝모달
            </div>
        )
    }
}

export default Modal;