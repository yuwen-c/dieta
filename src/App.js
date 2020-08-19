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


const initialchecked = 
[[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false]];

class App extends Component{
  constructor(){
    super();
    this.state = {
      weight : 0,
      BMR : 0,
      isSignIn : false,
      route: 'signin', // sign in, sign up, weight, activity, exercise, nutrition

      deficit : 0,
      activity : [], // store week activity, like: ['0', '1', '0', '1', '0', '3', '2']
      exercise : [], // store week exercise, like: ['0', '1', '0', '1', '0', '3', '2']
      
      protein : 0,
      oil : 0,
      dailyCalorie : [], // 7 days daily calorie
      dailyCarbon : [], // 7 days daily carbohydrate

      checkedActivity : initialchecked,
      checkedExercise : initialchecked,
      // the default of checked attribute of options
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

  // 把原本的onClick改為onChange，按下之後，要把同一組其他的default設為false，再把自己的設為true
  // onclick, save options to state
  onSendOption = (event) => {
    // if the returned name includes activity, then setState activity
    console.log("onSendOption: name", event.target.name, "value",event.target.value);
    const index = (event.target.name).slice(-1); // get the latest letter of "activity1"
    
    if(event.target.name.includes('activity')){
      // save option value to activity state
      let activityArr = this.state.activity.slice(); // use slice() to ensure we create a seperate copy of this.state.activity
      activityArr[index-1] = event.target.value; // save one option to the certain index of element
      this.setState({activity : activityArr})

      // modify checked state. 1: set 4 options to false, 2: set the one to true
      let changedChecked = this.state.checkedActivity.slice(); //只有要改那一組option，不能複製整個initial
      changedChecked[index-1] = [false, false, false, false];
      changedChecked[index-1][event.target.value] = true;
      this.setState({checkedActivity : changedChecked})

    }
    // exercise part
    else if(event.target.name.includes('exercise')){
      // save option value to state
      let exerciseArr = this.state.exercise.slice(); // a new exercise state array
      exerciseArr[index-1] = event.target.value;
      this.setState({exercise : exerciseArr});

      // modify checked state. 
      let changedChecked = this.state.checkedExercise.slice(); 
      changedChecked[index-1] = [false, false, false, false];
      changedChecked[index-1][event.target.value] = true;
      this.setState({checkedExercise : changedChecked})      

    }
    // Calorie deficit part: 300/400/500
    else{
      this.setState({deficit : event.target.value})
    }  
  }

  // load activity and exercise settings of last week
  // 1. 顯示選項在畫面上 ok (但是要先把checked改為false)
  // 2. 儲存到activity state, exercise state ok
  // 3. 分activity, exercise兩種選項
  onLoadOptions = (kind) => {
    console.log('onLoad', kind)
    if(kind === 'activity'){
      // 先把checked恢復false預設值(若使用者已有點選，要清除)
      this.setState({checkedActivity: initialchecked})
      // 預設的資料，到時要從資料庫抓
      let activityDatabase = ['0', '1', '0', '1', '0', '3', '2'];
      // ***only one input with defaultCheck attribute doesn't work!!!!

      let activityDefault = [];
      // make a copy of checkedActivity state, set one of it (depends on database) to true
      for(let i=0; i<7; i++){
        let activityDay = initialchecked[i].slice();
        activityDay[activityDatabase[i]] = true;
        activityDefault.push(activityDay) 
      }
      this.setState({ checkedActivity : activityDefault})

      // save data (options) to state (暫時用預設的資料)
      this.setState({activity : activityDatabase})
      }


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
                onChange={this.onChange}
                onLoadOptions = {this.onLoadOptions}  
                optionCheckedState = {this.state.checkedActivity}
                />

      case 'exercise':
        return <Exercise
                PonRouteChange = {this.onRouteChange}  
                PonSendOption = {this.onSendOption}
                PcalculateNutrition = {this.calculateNutrition}
                optionCheckedState = {this.state.checkedExercise}
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
        {this.state.activity}
      </div>
    )
  }

}


export default App;
