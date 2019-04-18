import React, {Component} from 'react';
import '../style/_field.scss';
import Animal from './animal';

class Field extends Component {
    render(){
        return (
            <div className="Field">
                <Animal className="eachAnimal" Animal={this.props.Animal} AnimalCount={this.props.AnimalCount} RunAnimal={this.props.RunAnimal} RunStart={this.props.RunStart}/>
            </div>
        );
    }
}

export default Field;