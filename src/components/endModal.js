import React, {Component} from 'react';
import '../style/_modal.scss';

class EndModal extends Component{
    render(){
        const RankResult = this.props.RankResult
        return(
            <div className="EndModal">
                {RankResult.map((obj)=>{
                    return <div key={obj.rank}>
                    {obj.name}은 {obj.rank} 등 !
                    </div>
                })}
            </div>
        )
    }
}

export default EndModal;