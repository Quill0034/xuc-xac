import React, { Component } from "react"; 
import flip from "./assets/flip.png"; 
import head from "./assets/head.png"; 
import tail from "./assets/tail.png"; 
export default class Flip extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            click: 0,
            totalHead: 0,
            totalTail: 0
        };
      }


    coinToss() {
        // This function will randomly return either 'heads' or 'tails'.
        this.setState({ click: Math.random() });
    }

      
      
    render() {

        let appear ;
        let disappear;
        let img;

        if (this.state.click === 0){
            appear = "appear";
            disappear = "disappear";
        }
        else{
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
       
    console.log(this.state.click); 
          
      return (
  
        <div>
        <img src={flip} alt="flip" className={appear} style={{margin: '15px auto'}}/>
        <div className={disappear}>
        <div style={{margin: '15px auto'}}>
        {img}
        </div>
        
        </div>
        <button  onClick = {() => this.coinToss()} className="btn btn-success">click to flip the coin</button>
      </div>
      );
    }
}
