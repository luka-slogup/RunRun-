import React, {Component} from 'react';
import '../style/_field.scss';
import Animal from './animal';

class Field extends Component {
    render(){

        return (
            <div className="Field">
                <h1>field</h1>
                <Animal className="eachAnimal" />
            </div>
        );
    }
}

export default Field;