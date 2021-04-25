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
            radio: ""
        }
        this.task1 = this.task1.bind(this);
        this.forCount = this.forCount.bind(this);
        this.ResetCount = this.ResetCount.bind(this);
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
           this.setState({textwarning: "Длинна не меньше 6"});
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


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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
                        <select >
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                            <option>Пункт 3</option>
                            <option>Пункт 4</option>
                        </select>
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

                </header>
            </div>
        );
    }
}

export default App;
