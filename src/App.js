import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';
import Nutrition from './Nutrition';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import Navigation from './Navigation';

// const initialState = {
//   weight : 55,
//   BMR: 1452,
//   isSignIn : true,
//   route: 'nutrition',
// }

class App extends Component{
  constructor(){
    super();
    this.state = {
      weight : 0,
      BMR : 0,
      isSignIn : false,
      route: 'signin', // sign in, sign up, weight, activity, exercise, nutrition

      deficit : 0,
      activityDay_1: '',
      activityDay_2: '',
      activityDay_3: '',
      activityDay_4: '',
      activityDay_5: '',
      activityDay_6: '',
      activityDay_7: '',
      exerciseDay_1: '',
      exerciseDay_2: '',
      exerciseDay_3: '',
      exerciseDay_4: '',
      exerciseDay_5: '',
      exerciseDay_6: '',
      exerciseDay_7: '',
      
    }
  }

  // get body weight
  onInputChange = (event) => {
    this.setState({weight: event.target.value});
  }

  // calculate BMR
  onBMRCalculate = () =>{
    const bmr = parseInt(this.state.weight*2.2*12);
    this.setState({BMR : bmr});
  } 

  onRouteChange = (route) => {
    // this.setState({isSignIn : true})
    this.setState({route : route});
    console.log("onRoute", route);
  }

  onSendOption = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value})
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
                PonBMRCalculate = {this.onBMRCalculate}
                Pbmr = {this.state.BMR}
                PonRouteChange = {this.onRouteChange} 
                PonSendOption = {this.onSendOption} 
                />

      case 'activity':
        return <Activity
                PonRouteChange = {this.onRouteChange}  
                PonSendOption = {this.onSendOption}
                />

      case 'exercise':
        return <Exercise
                PonRouteChange = {this.onRouteChange}  
                PonSendOption = {this.onSendOption}
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
        {this.state.deficit}
        {this.state.exerciseDay_1}
        {this.state.exerciseDay_7}
      </div>
    )
  }

}


export default App;
