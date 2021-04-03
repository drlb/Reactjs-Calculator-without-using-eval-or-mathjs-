import React, { Component } from 'react'

class InputHeader extends Component {
    
    render() {
        const {total, exinput} = this.props;
        return (
                <div className="input">
                    <p className="exinput mt-1 ml-2">{exinput}</p>
                    <p className="total">{total}</p>
                </div>

        );
    }
}
 
export default InputHeader;