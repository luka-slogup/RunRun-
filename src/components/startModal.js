import React, {Component} from 'react';
import '../style/_modal.scss';

class StartModal extends Component{

    render(){

        return(
            <div className="StartModal">
                    <div className="logoContainer">
                        <div className="logo"/>
                    </div>
                    <div className="animalNumContainer">
                        <div className="buttonContainer">
                            {(this.props.AnimalCount > 2) && <button onClick={this.props.DecreaseAnimal}>-</button>}
                        </div>
                        <span className="AnimalNum">{this.props.AnimalCount}</span>
                        <div className="buttonContainer">
                            {(this.props.AnimalCount < 6) && <button onClick={this.props.IncreaseAnimal}>+</button>}
                        </div>
                    </div>

                    <div className="inputContainer">
                        {(this.props.AnimalCount >= 2) && <input id="0" placeholder={this.props.Animal[0].name} vlaue={this.props.Animal[0].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 2) && <input id="1" placeholder={this.props.Animal[1].name} vlaue={this.props.Animal[1].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 3) && <input id="2" placeholder={this.props.Animal[2].name} vlaue={this.props.Animal[2].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 4) && <input id="3" placeholder={this.props.Animal[3].name} vlaue={this.props.Animal[3].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 5) && <input id="4" placeholder={this.props.Animal[4].name} vlaue={this.props.Animal[4].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 6) && <input id="5" placeholder={this.props.Animal[5].name} vlaue={this.props.Animal[5].name} onChange={this.props.NameChange}/>}
                    </div>
                    <div className="submitContainer">
                        <button onClick={this.props.StartShow}>준비 끝!</button>
                    </div>
            </div>
        )
    }
}

export default StartModal;