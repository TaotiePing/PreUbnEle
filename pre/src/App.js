import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  // let msg = ""
  constructor(){
    super();
    this.state ={msg:""}
    this.msg = "随着时间的光芒，看清这个世界的面颊. \n"
    this.msg+="When the world says, “Give Up!” Hope whispers, “Try it one more time”.\n"
    this.msg+="2019年4月17日 UbnEle"
  }
  componentDidMount() {
    this.timerID = setInterval(
      ()=>{
        if (this.state.msg.length < this.msg.length){
          let l = this.state.msg.length
          this.state.msg+=this.msg[l++]
          this.setState({msg: this.state.msg});
        }else{
          this.state.msg=""
        }
      },
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-txt">
              <pre>
                {this.state.msg}
                <b className="inner">&nbsp;&nbsp;|</b>
              </pre>
        </div>
        </header>
        <footer className="App-footer">
         <a className="App-link">
           版权所有 © UbnEle.com · 未知就在那里
         </a>
         <a className="App-link">
           · 粤ICP备09162504号-2           
         </a>
        </footer>
      </div>
    );
  }
}

export default App;
