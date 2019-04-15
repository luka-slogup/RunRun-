import React, {Component} from 'react';
import '../style/_modal.scss';

class StartModal extends Component{
    render(){
        return(
            <div className="StartModal">
                시작모달
                    <div>동물숫자 : {this.props.AnimalCount} </div>
                    <button onClick={this.props.IncreaseAnimal}>+</button>
                    <button onClick={this.props.DecreaseAnimal}>-</button>
                    <input type="checkBox"/>
                    <label>장애물 추가</label>
                    <button onClick={this.props.StartShow}>설정끝!</button>
            </div>
        )
    }
}

export default StartModal;