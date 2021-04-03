import React, { Component } from 'react'

class CalcPad extends Component {
    
    render() { 
        const { opertators} = this.props;
        return (
            <div className="buttons">
                {opertators.map(op => (op.op === 'EC' || op.op === 'AC' || op.op === 'Del' || op.op ==='=') ? op.content : op.content(op.op))}
            </div>
         );
    }
}
 
export default CalcPad;