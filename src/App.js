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
      activity : [], // change activity to just one array, [0] ~ [6]
      exercise : [],
      // after calculation, there will be:
      daily: [], // day 1: [protein, oil, carbonhydrate, total calorie], day 2: []...


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
  
  // set route
  onRouteChange = (route) => {
    // this.setState({isSignIn : true})
    this.setState({route : route});
    console.log("onRoute", route);
    window.scrollTo(0, 0); //scroll page to top 
  }


  // onclick, save options in state
  onSendOption = (event) => {
    // if the returned name includes activity, then setState activity
    console.log(event.target.name, event.target.value);
    const index = (event.target.name).slice(-1); // get the latest letter of "activity1"
    if(event.target.name.includes('activity')){
      let activityArr = this.state.activity.slice(); // use slice() to ensure we create a seperate copy of this.state.activity
      activityArr[index-1] = event.target.value; // save one option to the certain index of element
      this.setState({activity : activityArr})
    }
    // exercise part
    else if(event.target.name.includes('exercise')){
      let exerciseArr = this.state.exercise.slice(); // a new exercise state array
      exerciseArr[index-1] = event.target.value;
      this.setState({exercise : exerciseArr});
    }
    // Calorie deficit part: 300/400/500
    else{
      this.setState({deficit : event.target.value})
    }  
  }

  calculateNutrition = () => {
    const {weight} = this.state.weight; // 所有的？
    const protein = weight * 2; //固定不變
    // const oil = weight * 4; //固定不變
    // const day1 = weight * 2.2 * (12 + activityDay_1 + exerciseDay_1); // 算出day1~7
    // const Cday1 = parseInt((day1 - protein * 4 - oil * 9) / 4); //算出 Cday1~7
    // 算出的結果，全部儲存至database，以便之後查閱。
    // 所以要在哪邊計算？後端？
    // 要從哪邊觸發select資料?

  }


  // decide render components
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
      <br/>
      {this.state.weight}
      <br/>
      {this.state.activity}
      <br/>
      {this.state.exercise}
      </div>
    )
  }

}


export default App;
