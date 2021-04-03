import React, { Component } from 'react';
import CalcPad from './common/calcpad';
import InputHeader from './common/inputHeader';

class Calculator extends Component {
    state = {
        opertators: [
            { op: 'EC', content: <button key='EC' className="numbtn mr-2" onClick={() => this.clearInput()}>EC</button>},
            { op: 'AC', content: <button key='AC' className="numbtn mr-2" onClick={() => this.clearInput()}>AC</button> },
            { op: 'Del', content: <button key='Del' className="numbtn mr-2 fa fa-terminal" onClick={() =>this.handleDelete()}></button>},
            { op: '÷', content: op => <button key='÷' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button>},
            { op: '7', content: op => <button key='7' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '8', content: op => <button key='8' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '9', content: op => <button key='9' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '*', content: op => <button key='*' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '4', content: op => <button key='4' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '5', content: op => <button key='5' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '6', content: op => <button key='6' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '+', content: op => <button key='+' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '1', content: op => <button key='1' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '2', content: op => <button key='2' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '3', content: op => <button key='3' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '-', content: op => <button key='-' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '.', content: op => <button key='.' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '0', content: op => <button key='0' className="numbtn mr-2" onClick={() => this.addToInput(op)}>{op}</button> },
            { op: '=', content: <button key='=' className="numbtn mr-2 p-3" id="totalbtn" onClick={() => this.handleCalculate()}>=</button>},
        ],
        total: 0,
        exinput: "",
    }

    addToInput = num => {
        this.setState({ exinput: this.state.exinput + num});
    };

    clearInput = () => {
        this.setState({ total: 0, exinput: "" });
    };

    handleDelete = () =>
    {
        var x = this.state.exinput;
        this.setState({ exinput: x.substr(0,x.length-1)});
    }

    convertToArray = () =>{
        var x = this.state.exinput;
        var str = "";
        var arr = [];
        for(var i = 0; i < x.length; i++)
        {   
            if(x[i] === '+' || x[i] === '-' || x[i] === '*' || x[i] === '÷')
            {
                arr.push(str);
                arr.push(x[i]);
                str = "";
            }
            else
            {
                str += x[i];
            }
            
        }
        arr.push(str);
        return arr;
    }

    handleCalculate = () =>
    {
        let x = this.convertToArray();
        let prevNumber = "";
        let nextNumber = "";
        let sumex = 0;
        for(var i = 0; i < x.length; i++)
        {
            if(x[i] === '*')
            {
                prevNumber = parseFloat(x[i-1]);
                nextNumber = parseFloat(x[i+1]);
                sumex = prevNumber * nextNumber; 
                x.splice(i-1,3,String(sumex));
                i = i-2;
                console.log(x);
            }
            if(x[i] === '÷')
            {
                prevNumber = parseFloat(x[i-1]);
                nextNumber = parseFloat(x[i+1]);
                sumex = prevNumber / nextNumber; 
                x.splice(i-1,3,String(sumex));
                i = i-2;
                console.log(x);
            }
            sumex=0;
        }
        
        for(var j = 0; j < x.length; j++)
        {
            if(x[j] === '+')
            {
                prevNumber = parseFloat(x[j-1]);
                nextNumber = parseFloat(x[j+1]);
                sumex = prevNumber + nextNumber; 
                x.splice(j-1,3,String(sumex));
                j = j-2;
            }
            if(x[j] === '-')
            {
                prevNumber = parseFloat(x[j-1]);
                nextNumber = parseFloat(x[j+1]);
                sumex = prevNumber - nextNumber; 
                x.splice(j-1,3,String(sumex));
                j = j-2;
            }
          
            sumex = 0;
        }

        this.setState({total : x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")});
    }

    render() { 
        return ( 
            <div className="container">
                <InputHeader total={this.state.total} exinput={this.state.exinput}/>
                <p><hr/><span className="namecalc">DM (+/-) Calculator</span></p>
                <CalcPad 
                    opertators={this.state.opertators}
                />
            </div>
         );
    }
}
 
export default Calculator;