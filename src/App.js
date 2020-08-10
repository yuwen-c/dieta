import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';

class App extends Component{
  constructor(){
    super();
    this.state = {
      weight : 0,
      BMR : 0,
    }
  }

  onInputChange = (event) => {
    this.setState({weight: event.target.value});
    console.log(event.target.value);
  }

  onSubmitCalculate = () =>{
    const bmr = parseInt(this.state.weight*2.2*12);
    this.setState({BMR : bmr});
  } 


  render(){
    return(
      <div>
        <BodyWeight
          PonInputChange = {this.onInputChange}
          PonSubmitCalculate = {this.onSubmitCalculate}
          Pbmr = {this.state.BMR}
        />
        <Exercise/>
        <Activity/>
      </div>
    )
  }

}


export default App;
