import React, {Component, Fragment} from 'react';
import '../style/_animal.scss';


class Animal extends Component{

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
        if(this.props.RunStart === false){
            for (let eachAnimal of AnimalList){
                eachAnimal.style.bottom = '5%'
            }
        }
    }

    render(){
        const AnimalFromApp = this.props.Animal
        const AnimalCountFromApp = this.props.AnimalCount

        return(
            <Fragment>
                <div className="AnimalList">
                    {AnimalCountFromApp >= 2 && (<div className="Animal" id={AnimalFromApp[0].id} name={AnimalFromApp[0].name}>
                        <img src={AnimalFromApp[0].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[0].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 2 && (<div className="Animal" id={AnimalFromApp[1].id} name={AnimalFromApp[1].name}>
                        <img src={AnimalFromApp[1].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[1].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 3 && (<div className="Animal" id={AnimalFromApp[2].id} name={AnimalFromApp[2].name}>
                        <img src={AnimalFromApp[2].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[2].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 4 && (<div className="Animal" id={AnimalFromApp[3].id} name={AnimalFromApp[3].name}>
                        <img src={AnimalFromApp[3].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[3].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 5 && (<div className="Animal" id={AnimalFromApp[4].id} name={AnimalFromApp[4].name}>
                        <img src={AnimalFromApp[4].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[4].name}</div>
                    </div>)}
                    {AnimalCountFromApp >= 6 && (<div className="Animal" id={AnimalFromApp[5].id} name={AnimalFromApp[5].name}>
                        <img src={AnimalFromApp[5].src} alt="animal"/>
                        <div className="AnimalName">{AnimalFromApp[5].name}</div>
                    </div>)}
                </div>
                <div id="preload">
                    <img src={'https://image.flaticon.com/icons/svg/826/826908.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826910.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826944.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826912.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826905.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826940.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826931.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826932.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826904.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826917.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/826/826907.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/1596/1596601.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/720/720885.svg'} alt="a"></img>
                    <img src={'https://image.flaticon.com/icons/svg/1574/1574360.svg'} alt="a"></img>
                </div>    
            </Fragment>
        )   
    }
}

export default Animal;