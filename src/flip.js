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

componentWillUnmount() {
  this.setState({click: 0})
}
    coinToss = () => {
        // This function will randomly return either 'heads' or 'tails'.
        this.setState({ click: Math.random() });
    }

    handleClick = (e) => {
        this.setState({ click: 0 })
        this.props.setTimeout(this.coinToss, 300) // call the `toggle` function after 5000ms
      }
      
    render() {

        let img;
        let logo;
        if (this.state.click === 0){
            logo = <>
            <img src={flip} alt="flip"/>
            </>
        }
        else { logo = null }

        if ( this.state.click < 0.5 && this.state.click !== 0) { 
            img = <>
            <img src={head} alt="head"/>
            </>
            
        } else if (this.state.click >= 0.5) {
            img = <>
            <img src={tail} alt="tail"/>
            </>
        }
          console.log(this.state.click);
      return (
        <>
        <div style={{margin: '15px auto'}}>
          {logo}
        {img}
        </div>
        
        <div>
        <button  onClick={this.handleClick} className="btn btn-success">click to flip the coin</button>
      </div>
      </>
      );
    }
}
export default ReactTimeout(Flip)