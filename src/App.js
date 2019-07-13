import React, { Component } from 'react';
import './App.css';
import Field from './components/field';
import StartModal from './components/startModal';
import EndModal from './components/endModal';

class App extends Component {

  constructor(props){
    super(props);
    this._RunAnimal = this._RunAnimal.bind(this);
    this._endLineoffset = this._endLineoffset.bind(this);
  }
  componentDidMount(){
        (()=>{
          const AnimalArray = this.state.Animal
          let i = AnimalArray.length-1
          for(; i>0; i--){
            const j = Math.floor(Math.random()*(i - 0))
            const temp = AnimalArray[i]
            AnimalArray[i] = AnimalArray[j]
            AnimalArray[j] = temp
          }
          return this.setState.Animal = AnimalArray
        })();
        
        const AppDiv = document.getElementsByClassName('App')[0];
        AppDiv.style.height = window.innerHeight + 'px'
        
        // const http = require("http");
        // setInterval(function() {
        // http.get("https://sample-react-runrun.herokuapp.com/");
        // }, 300000);
  }

    state ={
      StartModalShow : true, // 게임설정 모달창 등장여부
      EndModalShow : false, // 결과 모달창 등장여부
      StartShow : false, // Start! 버튼의 등장여부
      RunStart : false, // true가 되면 동물들이 움직이기 시작한다.
      reStartShow : false,
      endLineoffset : 0,
      AnimalRank : 0,
      RankResult : [],
      AnimalCount : 2, // modal-StartModal, animal, modal-EndModal로 전달됨
      Animal : [
        { 
          id : 0,
          name : '달팽이',
          src : 'https://image.flaticon.com/icons/svg/826/826908.svg'
        },
        { 
          id : 1,
          name : '참새',
          src : 'https://image.flaticon.com/icons/svg/826/826910.svg'
        },
        { 
          id : 2,
          name : '꿀벌',
          src : 'https://image.flaticon.com/icons/svg/826/826944.svg'
        },
        { 
          id : 3,
          name : '펭귄',
          src : 'https://image.flaticon.com/icons/svg/826/826912.svg'
        },
        { 
          id : 4,
          name : '해파리',
          src : 'https://image.flaticon.com/icons/svg/826/826905.svg'
        },
        { 
          id : 5,
          name : '버섯',
          src : 'https://image.flaticon.com/icons/svg/826/826940.svg'
        },
        { 
          id : 6,
          name : '회오리',
          src : 'https://image.flaticon.com/icons/svg/826/826931.svg'
        },
        { 
          id : 7,
          name : '사슴벌레 ',
          src : 'https://image.flaticon.com/icons/svg/826/826932.svg'
        },
        { 
          id : 8,
          name : '태양',
          src : 'https://image.flaticon.com/icons/svg/826/826904.svg'
        },
        { 
          id : 9,
          name : '돌',
          src : 'https://image.flaticon.com/icons/svg/826/826917.svg'
        },
        { 
          id : 10,
          name : '나비',
          src : 'https://image.flaticon.com/icons/svg/826/826907.svg'
        },
        { 
          id : 11,
          name : '개구리',
          src : 'https://image.flaticon.com/icons/svg/1596/1596601.svg'
        },
        { 
          id : 12,
          name : '거북이',
          src : 'https://image.flaticon.com/icons/svg/720/720885.svg'
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
              StartShow : true, // Start 컴포넌트 등장
          })

  }
  _StartClose = () => {
          this.setState({
              StartShow : false,
          })
  }

  _NameChange = (e) => {
    let animal = this.state.Animal
    const targetID = e.target.id
    const targetValue = e.target.value
    animal[[targetID]].name = targetValue
    this.setState({
      Animal : animal
    })
  }

  _RunStart = () => {
    this.setState({
      RunStart : true
    })
    }
  
  _ReStart = () => {
    this.setState({
      StartModalShow : true,
      EndModalShow : false, 
      StartShow : false, 
      RunStart : false, 
      reStartShow : false,
      AnimalRank : 0,
      RankResult : [],
    })
  }
  
  _endLineoffset(e){
    this.setState({
      endLineoffset : e
    })
  }

  _RunAnimal(e){
      if(this.state.RunStart === true){ // RunStart가 true일경우 Interval 시작
        let tmp = 40 // 동물 style.top 기본 값
        let speed = 7 // 동물 달리기 속도
        let intervalOn = true // 동물을 멈추기 위한 변수. Interval은 끝나지 않는다.
        let rankCheck = true  // 결승선에 닿으면 false가 되고 rank숫자 변동을 멈춘다.
        setTimeout(()=>{ // 2초 뒤 가속 혹은 감속
            const speedPlus = Math.floor(Math.random()* (8)-3)
            speed += speedPlus
            console.log('2000ms 후 속도변경')
        }, 2000);
        
        const RunInterval = setInterval(()=>{ // 달리기 Interval
            if(intervalOn === true){ // 달리기 시작
                const rannum = Math.floor(Math.random() * (speed + 1))
                tmp += rannum
                e.style.bottom = tmp +'px'
                this.setState({
                  EndModalShow : true
                })
            }

            if(e.offsetTop <= this.state.endLineoffset-e.offsetHeight && rankCheck){ // 결승선에 닿았는지 체크
              rankCheck = false // 결승선에 닿았으므로 랭크 올림 멈춤
              this.setState({
                AnimalRank : this.state.AnimalRank + 1,
                RankResult : this.state.RankResult.concat({rank:this.state.AnimalRank+1,name:e.getAttribute('name')})
              })

              if(this.state.AnimalRank === this.state.AnimalCount){ // 마지막 랭크과 동물전체숫자 같을때
                console.log('경기종료')
                setTimeout(() => {
                  this.setState({
                    reStartShow : true
                  })
                }, 800);
              }
            }
            
            if(e.offsetTop <= this.state.endLineoffset-e.offsetHeight){ // 각 동물이 결승선을 넘으면 각 동물의 인터벌 종료
              intervalOn = false // 결승선을 넘었으므로 달리기 멈춤
              e.style.bottom = window.innerHeight - e.offsetHeight + 'px' // 달리기 멈추고 정렬
              clearInterval(RunInterval) // RunInterval 종료
            }
        }, 30);
      }
    }

  render() {
    return (
      <div className="App">
        <Field Animal={this.state.Animal} AnimalCount={this.state.AnimalCount} RunAnimal={this._RunAnimal} RunStart={this.state.RunStart} endLineoffset={this._endLineoffset}/>
        {(this.state.StartModalShow === true) && <StartModal NameChange={this._NameChange} Animal={this.state.Animal} AnimalCount={this.state.AnimalCount} IncreaseAnimal={this._IncreaseAnimal} DecreaseAnimal={this._DecreaseAnimal} StartShow={this._StartShow}/>}
        {(this.state.EndModalShow === true) && <EndModal reStart={this._ReStart} reStartShow={this.state.reStartShow} RankResult={this.state.RankResult}/>}
        <div className="StartWrap">
          {(this.state.StartShow === true) && (<Start RunStart={this._RunStart} StartClose={this._StartClose}/>)}
        </div>
      </div>
    );
  }
}

class Start extends Component{
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  _onClick(){
    this.props.StartClose()
    this.props.RunStart()
  }
  render(){
      return(
          <div id="Start" className="Start" onClick={this._onClick}>
              <div className="StartText">
                <span>터</span>
                <span>치</span>
                <span>하</span>
                <span>면</span>
                <span>시</span>
                <span>작</span>
                <span>!</span>
              </div>
          </div>
    )
  }
}

export default App;
