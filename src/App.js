import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';
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
      route: 'signin' // sign in, sign up, weight, activity, exercise, nutrition
    }
  }

  onInputChange = (event) => {
    this.setState({weight: event.target.value});
  }

  onSubmitCalculate = () =>{
    const bmr = parseInt(this.state.weight*2.2*12);
    this.setState({BMR : bmr});
  } 

  onRouteChange = (route) => {
    // this.setState({isSignIn : true})
    this.setState({route : route});
    console.log("onRoute", route);
  }



  renderSwitch = (route) => {
    switch (route){
      case 'signin':
        return <SignIn
                PonRouteChange={this.onRouteChange}/>;
      
      case 'signup':
        return <SignUp
                PonRouteChange={this.onRouteChange}/>

      case 'weight':
        return <BodyWeight
                PonInputChange = {this.onInputChange}
                PonSubmitCalculate = {this.onSubmitCalculate}
                Pbmr = {this.state.BMR}
                PonRouteChange = {this.onRouteChange}  
                />

      case 'activity':
        return <Activity
                PonRouteChange = {this.onRouteChange}  
                />

      case 'exercise':
        return <Exercise
                PonRouteChange = {this.onRouteChange}  
                />
      case 'nutrition':
        return <Nutrition/>
      
      default:
        return 
    }
  }

  render(){
    return(
      <div>
        <Navigation/>
        {this.renderSwitch(this.state.route)}
      </div>
    )
  }

}


export default App;
