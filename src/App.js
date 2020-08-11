import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';
import CalorieDeficit from './CalorieDeficit';
import Nutrition from './Nutrition';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import Navigation from './Navigation';

class App extends Component{
  constructor(){
    super();
    this.state = {
      weight : 0,
      BMR : 0,
      isSignIn : false,
      route: ""
    }
  }

  onInputChange = (event) => {
    this.setState({weight: event.target.value});
  }

  onSubmitCalculate = () =>{
    const bmr = parseInt(this.state.weight*2.2*12);
    this.setState({BMR : bmr});
  } 

  onRouteChange = () => {
    this.setState({isSignIn : true})
  }


  render(){
    return(
      <div  className="App">
        <Navigation/>
        {this.state.isSignIn === false ? 
        <div>
          <SignIn
            PonRouteChange={this.onRouteChange}
          />
        </div>
      :
        <div>
          <BodyWeight
            PonInputChange = {this.onInputChange}
            PonSubmitCalculate = {this.onSubmitCalculate}
            Pbmr = {this.state.BMR}
          />
          <CalorieDeficit/>
          <Activity/>
          <Exercise/>

          <Nutrition/>
        </div>}
      </div>
    )
  }

}


export default App;
