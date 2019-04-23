import React, {Component} from 'react';
import '../style/_modal.scss';

class EndModal extends Component{
    render(){
        const RankResult = this.props.RankResult
        return(
            <div className="EndModal">
                {RankResult.map((obj)=>{
                    return <div className="RankResultText" key={obj.rank}>
                    {obj.rank} 등 : {obj.name}
                    </div>
                })}

                {(this.props.reStartShow)&&<div className="reStart" onClick={this.props.reStart}> 
                <img className="reStartimg" src="https://image.flaticon.com/icons/svg/1574/1574360.svg" alt="return"/>
                다시하기!
                </div>}
            </div>
        )
    }
}

export default EndModal;