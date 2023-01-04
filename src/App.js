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
          name : '판다',
          src : 'https://i.imgur.com/xUiYtmp.png'
        },
        { 
          id : 1,
          name : '물개',
          src : 'https://i.imgur.com/xLGBGQK.png'
        },
        { 
          id : 2,
          name : '박쥐',
          src : 'https://i.imgur.com/6grBe5a.png'
        },
        { 
          id : 3,
          name : '고양이',
          src : 'https://i.imgur.com/h2uO73u.png'
        },
        { 
          id : 4,
          name : '개구리',
          src : 'https://i.imgur.com/xphMaF8.png'
        },
        { 
          id : 5,
          name : '문어',
          src : 'https://i.imgur.com/84tfcOx.png'
        },
        { 
          id : 6,
          name : '코알라',
          src : 'https://i.imgur.com/YN18LuT.png'
        },
        { 
          id : 7,
          name : '부엉이 ',
          src : 'https://i.imgur.com/EvGjA83.png'
        },
        { 
          id : 8,
          name : '꽃게',
          src : 'https://i.imgur.com/ZyBoAam.png'
        },
        { 
          id : 9,
          name : '테디베어',
          src : 'https://i.imgur.com/EUCv2xK.png'
        },
        { 
          id : 10,
          name : '원숭이',
          src : 'https://i.imgur.com/BlXiaJ8.png'
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
