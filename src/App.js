import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';
import Nutrition from './Nutrition';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './App.css';
import Navigation from './Navigation';
import { act } from 'react-dom/test-utils';

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
      // daily: [], // day 1: [protein, oil, carbohydrate, total calorie], day 2: []...
      protein : 0,
      oil : 0,

      dailyCalorie : [],
      dailyCarbon : [],

      defaultCheckedActivity : '',

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


  // onclick, save options to state
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

  // load activity and exercise settings of last week
  onLoadOptions = () => {
    // 預設的資料，到時要從資料庫抓
    let activityDatabase = ['0', '1', '0', '1', '0', '3', '2'];
    // to show the last week options, all the 4 inputs need the defaultChecked attribute
    // and one of them with "true", others with "false"
    // only one input with defaultCheck attribute doesn't work!!!!

    let activityDefault = [];

    for(let i=0; i<7; i++){
      let activityDayX = [false, false, false, false]; //one day array with 4 elements(default false) 
      activityDayX[activityDatabase[i]] = true // turn choosen element to true
      activityDefault.push(activityDayX) 
    }
    console.log(activityDefault);
    this.setState({ defaultCheckedActivity : activityDefault})
  }

  // do calculation and save to state
  calculateNutrition = () => {
    const {weight, deficit, activity, exercise} = this.state; 
    const protein = weight * 2; // protein fixes to 2 time weight
    const oil = weight * 1; // oil fixes to 1 time weight

    let dailyCalorie = [];
    let dailyCarbon = [];

    // calculate day1-7
    for(let i=0; i<7; i++){
      // total calorie of that day
      dailyCalorie[i] = parseInt(weight * 2.2 * (12 + parseInt(activity[i]) + parseInt(exercise[i])))-deficit;
      // carbohydrate of thar day
      dailyCarbon[i] = parseInt((dailyCalorie[i] - protein * 4 - oil * 9) / 4);

    }
    // save these numbers
    this.setState({
      protein : protein,
      oil : oil,
      dailyCalorie : dailyCalorie,
      dailyCarbon : dailyCarbon    // "let" variable has a different color 
    })
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
                PonLoadOptions = {this.onLoadOptions}  // (load先前資料)，把defaultCheck改成true
                optionState = {this.state.defaultCheckedActivity}  //改變defaulte checked狀態
                />

      case 'exercise':
        return <Exercise
                PonRouteChange = {this.onRouteChange}  
                PonSendOption = {this.onSendOption}
                PcalculateNutrition = {this.calculateNutrition}
                />
      case 'nutrition':
        return <Nutrition
                Pweight = {this.state.weight}
                Pdeficit = {this.state.deficit}
                Pprotein = {this.state.protein}
                Poil = {this.state.oil}
                Pactivity = {this.state.activity}
                Pexercise = {this.state.exercise}
                PdailyCalorie = {this.state.dailyCalorie}
                PdailyCarbon = {this.state.dailyCarbon}
                />
      
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
