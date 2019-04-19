import React, {Component} from 'react';
import '../style/_field.scss';
import Animal from './animal';

class Field extends Component {
    componentDidMount(){
        const endLineoffset = document.getElementsByClassName('endLine')
        this.props.endLineoffset(endLineoffset[0].offsetTop)
    }
    render(){
        return (
            <div className="Field">
                <div className="flag">
                    <img src="https://image.flaticon.com/icons/svg/148/148878.svg" alt="flag"/>
                </div>
                <div className="endLine"></div>
                <div className="startLine"></div>
                <Animal className="eachAnimal" Animal={this.props.Animal} AnimalCount={this.props.AnimalCount} RunAnimal={this.props.RunAnimal} RunStart={this.props.RunStart}/>
            </div>
        );
    }
}

export default Field;