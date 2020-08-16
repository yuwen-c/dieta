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
      // daily: [], // day 1: [protein, oil, carbohydrate, total calorie], day 2: []...
      protein : 0,
      oil : 0,

      dailyCalorie : [],
      dailyCarbon : []

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

  calculateNutrition = () => {
    const {weight, deficit, activity, exercise} = this.state; 
    const protein = weight * 2; // 蛋白質固定不變，體重2倍
    const oil = weight * 1; // 脂肪固定不變，體重1倍
    // const day1 = parseInt(weight * 2.2 * (12 + parseInt(activity[0]) + parseInt(exercise[0])))-deficit; // 算出day1~7
    // const Cday1 = parseInt((day1 - protein * 4 - oil * 9) / 4); //算出 Cday1~7
    // // console.log('protein, oil, Cday1, day1 + bmr: ',protein, oil, Cday1, day1 , this.state.BMR)
    // // this.setState({daily: [protein, oil, Cday1, day1]}) //不會當作二維，而是整個一維放進去
    // // this.setState(Object.assign({}, this.state.daily, {daily[0]: [protein, oil, Cday1, day1]})) //syntax error
    // const newDailyArr = this.state.daily.slice();
    // newDailyArr[0] = [protein, oil, Cday1, day1];
    // this.setState({daily : newDailyArr})

    let dailyCalorie = [];
    let dailyCarbon = [];

    // 進行多天的計算：
    for(let i=0; i<7; i++){
      // 先算當天需要的總熱量
      dailyCalorie[i] = parseInt(weight * 2.2 * (12 + parseInt(activity[i]) + parseInt(exercise[i])))-deficit;
      // 計算當天的carbon量
      dailyCarbon[i] = parseInt((dailyCalorie[i] - protein * 4 - oil * 9) / 4);

    }

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
