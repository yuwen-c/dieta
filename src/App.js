import React, { Component } from 'react';
import BodyWeight from './BodyWight';
import Exercise from './Exercise';
import Activity from './Activity';
import Nutrition from './Nutrition';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import './App.css';

// import Navigation from './Navigation';
import RateCalculation from './RateCalculation';
import NextMove from './NextMove';
// import { act } from 'react-dom/test-utils';
import NavbarDrop from './NavbarDrop';


const initialchecked = 
[[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false]];

const initialState = {
  name: '',
  email: '',
  password: '',

  weight : 55,
  BMR : 0,
  isSignIn : false,
  route: 'home', // sign in, sign up, weight, activity, exercise, nutrition

  deficit : 300,
  activity : [], // store week activity, like: ['0', '1', '0', '1', '0', '3', '2']
  exercise : [], // store week exercise, like: ['0', '1', '0', '1', '0', '3', '2']
  
  protein : 0,
  oil : 0,
  dailyCalorie : [], // 7 days daily calorie
  dailyCarbon : [], // 7 days daily carbohydrate

  checkedActivity : initialchecked,
  checkedExercise : initialchecked,
  // the default of checked attribute of options

  modifySpeedUp: false,
  modifySlowDown: false, 
  modifyOption: 0,
}

class App extends Component{
  constructor(){
    super();
    this.state = initialState;
  }

  // save name, email, password to state
  setStateFun = (stateName, stateValue) => {
    this.setState({[stateName] : stateValue})
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
  
  // set route and isSignIn state 
  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState(initialState)
    }
    else if(route === 'weight' ){
      this.setState({isSignIn : true})
    }
    this.setState({route : route});
    window.scrollTo(0, 0); //scroll page to top 
  }

  // 把原本的onClick改為onChange，按下之後，要把同一組其他的default設為false，再把自己的設為true
  // onclick, save options to state
  onSendOption = (event) => {
    // if the returned name includes activity, then setState activity
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
  onLoadOptions = () => {
    // imaginary database
    let activityDatabase = ['0', '1', '0', '1', '0', '3', '2'];
    let exerciseDatabase = ['1', '1', '0', '2', '0', '2', '1'];

    // call getWeekOption function, set checked state and activity, exercise state
    if(this.state.route === 'activity'){
      this.setState({
        checkedActivity : this.getWeekOption(activityDatabase),
        activity : activityDatabase
      })    
    }
    else if(this.state.route === 'exercise'){
      this.setState({
        checkedExercise : this.getWeekOption(exerciseDatabase),
        exercise : exerciseDatabase
      })
    }
  }

  // give the default false array, and set one of it (depends on database) to true
  // then return a 7 days 2-dimentional array
  getWeekOption = (database) => {
    let oneWeekArr = [];
    for(let i=0; i<7; i++){
      let oneDayArr = [false, false, false, false];
      oneDayArr[database[i]] = true;
      oneWeekArr.push(oneDayArr);
    }
    return oneWeekArr;
  }

  // do calculation and save to state
  calculateNutrition = () => {
    // 實際上這邊要先去資料庫抓體重、deficit
    const {weight, deficit, activity, exercise, modifyOption} = this.state; 
    const protein = weight * 2; // protein fixes to 2 time weight
    const oil = weight * 1; // oil fixes to 1 time weight

    let dailyCalorie = [];
    let dailyCarbon = [];

    // calculate day1-7
    for(let i=0; i<7; i++){
      // total calorie of that day (-deficit, plus speed up or slow down option)
      dailyCalorie[i] = parseInt(weight * 2.2 * (12 + parseInt(activity[i]) + parseInt(exercise[i]))) - deficit + parseInt(modifyOption);
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

  // choose next move to speed up or slow down, show options (-100/ +100...)
  onModifyClick = (event) => {
    if (event.target.value === 'Speed Up'){
      this.setState({
        modifySpeedUp : true,
        modifySlowDown: false
      })
    }
    else{
      this.setState({
        modifySpeedUp : false,
        modifySlowDown: true
      })
    }
  } //event.target.value = Speed Up, name=X

  onSendModifyOption = (event) => {
    this.setState({modifyOption: event.target.value});
  } // value -100, name speedup

  // decide render components
  renderSwitch = (route) => {
    switch (route){
      case 'home':
        return <div className="flex justify-center absolute">
                <Home
                onRouteChange = {this.onRouteChange} 
                />
               </div>
      case 'signin':
        return <SignIn
                onRouteChange={this.onRouteChange}
                setStateFun={this.setStateFun}/>
      case 'signup':
        return <SignUp
                onRouteChange={this.onRouteChange}
                setStateFun={this.setStateFun}
                />

      case 'weight':
        return <BodyWeight
                onInputChange = {this.onInputChange}
                onBMRCalculate = {this.onBMRCalculate}
                bmr = {this.state.BMR}
                onRouteChange = {this.onRouteChange} 
                onSendOption = {this.onSendOption} 
                />

      case 'activity':
        return <Activity
                onRouteChange = {this.onRouteChange}  
                onSendOption = {this.onSendOption}
                onChange={this.onChange}
                onLoadOptions = {this.onLoadOptions}  
                optionCheckedState = {this.state.checkedActivity}
                />

      case 'exercise':
        return <Exercise
                onRouteChange = {this.onRouteChange}  
                onSendOption = {this.onSendOption}
                calculateNutrition = {this.calculateNutrition}
                onLoadOptions = {this.onLoadOptions}  
                optionCheckedState = {this.state.checkedExercise}
                />
      case 'nutrition':
        return <Nutrition
                email = {this.state.email}
                onRouteChange = {this.onRouteChange}
                weight = {this.state.weight}
                deficit = {this.state.deficit}
                protein = {this.state.protein}
                oil = {this.state.oil}
                activity = {this.state.activity}
                exercise = {this.state.exercise}
                dailyCalorie = {this.state.dailyCalorie}
                dailyCarbon = {this.state.dailyCarbon}
                />
      case 'rate':
        return <div>
                  <RateCalculation/>
                  <NextMove
                    onModifyClick = {this.onModifyClick}
                    modifySpeedUp = {this.state.modifySpeedUp}
                    modifySlowDown = {this.state.modifySlowDown}
                    onSendModifyOption = {this.onSendModifyOption}
                    onRouteChange = {this.onRouteChange}
                  />
                </div>
      
      default:
        return 
    }
  }

  render(){
    return(
      <div>
        {/* <Navigation
        email = {this.state.email}
        onRouteChange = {this.onRouteChange}
        isSign = {this.state.isSignIn} 
        /> */}
        <NavbarDrop
          email = {this.state.email}
          onRouteChange = {this.onRouteChange}
          isSign = {this.state.isSignIn} 
        />
        <div className="pl3 pl5-ns mw6-ns">
          {this.renderSwitch(this.state.route)}
        </div>
      </div>
    )
  }

}


export default App;
