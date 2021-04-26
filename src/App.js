import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           work: "",
            count: 0,
            text : "",
            textwarning: "",
            radio: "",
            select: "",
            width: "200px",
            rangeValue: "50",
            picture: "https://cdn3.iconfinder.com/data/icons/big-avatar-set/100/Avatar-39-256.png"

        }
        this.task1 = this.task1.bind(this);
        this.forCount = this.forCount.bind(this);
        this.ResetCount = this.ResetCount.bind(this);
        this.divSize = this.divSize.bind(this);
        this.hidepicture = this.hidepicture.bind(this);
    }

    task1() {
        console.log("work");
        this.setState({work: "button work"});
    }

    forCount() {
        this.setState({count: this.state.count + 1});
    }

    ResetCount() {
        this.setState({count: 0});
    }

    mouseMove() {
        console.log("move");
    }

    showatr1 = (e) => {
        console.log(e.target.getAttribute("data"));
    }

    inputChange = (e) => {
       this.setState({text: e.target.value});
       if (this.state.text.length < 6) {
           this.setState({textwarning: "Длинна должна быть не меньше 6 символов"});
       } else {
           this.setState({textwarning: ""});
       }
    }

    inpt = (e) => {
        if (e.target.checked) {
            console.log(e.target.value + " : " + "checkbox checked ");
        } else  {
            console.log(e.target.value + " : " + "checkbox unchecked");
        }
    }

    inpt2 = (e) => {
     if (e.target.checked) {
         console.log(e.target.value);
         this.setState({radio: e.target.value});
     }

    }

    inptValue = (e) => {
        this.setState({select: e.target.value});
        console.log(e.target.value);
    }

    divSize() {
        this.setState({width:  this.state.width + 3});
      console.log(this.state.width);
    }

    rangeValue = (e) => {
        this.setState({rangeValue: e.target.value});
    }

    hidepicture()  {
    if (this.state.picture) {
        this.setState({picture: ""});
        document.querySelector('.btn1').textContent = "Show picture";
    } else {
        this.setState({picture: "https://cdn3.iconfinder.com/data/icons/big-avatar-set/100/Avatar-39-256.png"});
        document.querySelector('.btn1').textContent = "Hide picture";
    }
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={this.state.picture}/>
                    <button className="btn1" onClick={this.hidepicture}>HidePicture</button>
                    <button onClick={this.task1}>Button</button>
                    <p>{this.state.work}</p>
                    <button onClick={this.forCount}>Count</button>
                    <p>{this.state.count}</p>
                    <button onClick={this.ResetCount}>ResetCount</button>
                    <div className="green" onMouseMove={this.mouseMove}></div>
                    <div>
                        <button  className="atr1" data="atr-1"  onClick={this.showatr1}>atr1</button>
                        <button  className="atr2" data="atr-2" onClick={this.showatr1}>atr2</button>
                        <input type="text" onChange={this.inputChange}/>
                        <select onInput={this.inptValue}>
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                            <option>Пункт 3</option>
                            <option>Пункт 4</option>
                        </select>
                        <span>{this.state.select}</span>
                        <input type="range" onChange={this.rangeValue}/>
                        <span>{this.state.rangeValue}</span>
                    </div>
                    <p>{this.state.text}</p>
                    <span>{this.state.textwarning}</span>
                   <p>
                       <input type="checkbox"  name="option1" value="a1" onInput={this.inpt}/>
                       <input type="checkbox"  name="option2" value="a2" onInput={this.inpt}/>
                       <input type="checkbox"  name="option3" value="a3" onInput={this.inpt}/>
                       <input type="radio" id="contactChoice1" name="contact" value="first" onInput={this.inpt2}/>
                       <input type="radio" id="contactChoice1" name="contact" value="second" onInput={this.inpt2}/>
                       <input type="radio" id="contactChoice1" name="contact" value="third" onInput={this.inpt2}/>
                       <span>{this.state.radio}</span>
                   </p>
                    <div className="first" style={{"width": this.state.width}}></div>
                    <button onClick={this.divSize}>DivSize</button>
                    <button>DivReset</button>

                </header>
            </div>
        );
    }
}

export default App;
