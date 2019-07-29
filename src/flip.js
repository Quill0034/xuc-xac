import React, { Component } from "react"; 
import ReactTimeout from 'react-timeout';
import flip from "./assets/flip.png"; 
import head from "./assets/head.png"; 
import tail from "./assets/tail.png"; 
class Flip extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            click: 0,
            totalHead: 0,
            totalTail: 0
        };
      }


    coinToss = () => {
        // This function will randomly return either 'heads' or 'tails'.
        this.setState({ click: Math.random() });
    }

    handleClick = (e) => {
        this.setState({ click: 0 })
        this.props.setTimeout(this.coinToss, 500) // call the `toggle` function after 5000ms
      }
      
    render() {

        let appear = "appear";
        let disappear = "disappear";
        let img;

        if (this.state.click !== 0){
            appear = "disappear";
            disappear = "appear";
        }

        if ( this.state.click < 0.5) { 
            img = <>
            <h1>Mặt ngửa</h1>
            <img src={head} alt="head"/>
            </>
            
        } else {
            img = <>
             <h1>Mặt xấp</h1>
            <img src={tail} alt="tail"/>
            </>
        }
          
      return (
  
        <div>
        <img src={flip} alt="flip" className={appear} style={{margin: '15px auto'}}/>
        <div className={disappear}>
        <div style={{margin: '15px auto'}}>
        {img}
        </div>
        
        </div>
        <button  onClick={this.handleClick} className="btn btn-success">click to flip the coin</button>
      </div>
      );
    }
}
export default ReactTimeout(Flip)