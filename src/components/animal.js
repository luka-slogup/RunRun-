import React, {Component, Fragment} from 'react';
import '../style/_animal.scss';


class Animal extends Component{
    constructor(props){
        super(props)
    }

    static defaultProps = {
        Animal:{
            id: 0,
            name: '동물',
            src: 'someUrl',
        }
    }
    
    componentDidUpdate(prevProps){
        const AnimalList = document.getElementsByClassName('Animal')
        if(prevProps.RunStart !== this.props.RunStart){
            for (let eachAnimal of AnimalList){
               this.props.RunAnimal(eachAnimal)
            }
        }
    }

    render(){
        const AnimalFromApp = this.props.Animal
        const AnimalCountFromApp = this.props.AnimalCount

        return(
            <Fragment>
                <div className="AnimalList">
                    {AnimalCountFromApp >= 2 && (<div className="Animal" id={AnimalFromApp[0].id}>
                        <img src={AnimalFromApp[0].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[0].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 2 && (<div className="Animal" id={AnimalFromApp[1].id}>
                        <img src={AnimalFromApp[1].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[1].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 3 && (<div className="Animal" id={AnimalFromApp[2].id}>
                        <img src={AnimalFromApp[2].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[2].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 4 && (<div className="Animal" id={AnimalFromApp[3].id}>
                        <img src={AnimalFromApp[3].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[3].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 5 && (<div className="Animal" id={AnimalFromApp[4].id}>
                        <img src={AnimalFromApp[4].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[4].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 6 && (<div className="Animal" id={AnimalFromApp[5].id}>
                        <img src={AnimalFromApp[5].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[5].name}</div>
                    </div>)}
                </div>    
            </Fragment>
        )   
    }
}

export default Animal;