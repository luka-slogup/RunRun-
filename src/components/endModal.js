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

                <div className="reStart"> 다시하기! </div>
            </div>
        )
    }
}

export default EndModal;