import React, {Component, Fragment} from 'react';
import '../style/_animal.scss';


class Animal extends Component{
    static defaultProps = {
        Animal:{
            id: 0,
            name: '동물',
            src: 'www.naver.com',
        }
    }

    render(){
        const AnimalFromApp = this.props.Animal
        return(
            <Fragment>
                <div className="AnimalList">
                    <div className="Animal" id={AnimalFromApp[0].id}>
                        <img src={AnimalFromApp[0].src} alt="animal"/>
                        <div>{AnimalFromApp[0].name}</div>
                    </div>
                    <div className="Animal" id={AnimalFromApp[1].id}>
                        <img src={AnimalFromApp[1].src} alt="animal"/>
                        <div>{AnimalFromApp[1].name}</div>
                    </div>
                    <div className="Animal" id={AnimalFromApp[2].id}>
                        <img src={AnimalFromApp[2].src} alt="animal"/>
                        <div>{AnimalFromApp[2].name}</div>
                    </div>
                    <div className="Animal" id={AnimalFromApp[3].id}>
                        <img src={AnimalFromApp[3].src} alt="animal"/>
                        <div>{AnimalFromApp[3].name}</div>
                    </div>
                    <div className="Animal" id={AnimalFromApp[4].id}>
                        <img src={AnimalFromApp[4].src} alt="animal"/>
                        <div>{AnimalFromApp[4].name}</div>
                    </div>
                    <div className="Animal" id={AnimalFromApp[5].id}>
                        <img src={AnimalFromApp[5].src} alt="animal"/>
                        <div>{AnimalFromApp[5].name}</div>
                    </div>
                </div>    
            </Fragment>
        )   
    }
}

export default Animal;