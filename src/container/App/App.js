import React, { Component } from 'react';
import Weight from '../../components/CalculationPath/Weight/Weight';
import Exercise from '../../components/CalculationPath/Exercise/Exercise';
import Activity from '../../components/CalculationPath/Activity/Activity';
import Nutrition from '../../components/NutritionResultPage/Nutrition/Nutrition';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import Home from '../../components/Home/Home';
import './App.css';
import RateCalculation from '../../components/NextMovePath/RateCalculation/RateCalculation';
import NavbarDrop from '../../components/NavbarDrop/NavbarDrop';
import ExplanationCardList from '../../components/HowItWorksPath/ExplanationCardList/ExplanationCardList';
//import { activityTableData, exerciseTableData } from '../../components/CalculationPath/LevelTable/TableData';

const initialchecked = 
[[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false]];

const initialState = {
  user : {
    name: '',
    email: '',
    weight: 0,    //load user data after log in. weight, deficit got refreshed***
    deficit: 0
  },

  weightMessage: '',
  nextPageMessage: '',

  // BMR : 0,
  isSignIn : false,
  route: 'home', // sign in, sign up, weight, activity, exercise, nutrition 新增 description, rate

  activity : [], // store week activity, like: [0, 1, 0, 1, 0, 3, 2]
  exercise : [], // store week exercise, like: [0, 1, 0, 1, 0, 3, 2]
  
  protein : 0,
  oil : 0,
  dailyCalorie : [], // 7 days daily calorie
  dailyCarbon : [], // 7 days daily carbohydrate

  checkedActivity : initialchecked,
  checkedExercise : initialchecked,
  // the default of checked attribute of options

  maintainRate: false,
  modifySpeedUp: false,
  modifySlowDown: false, 
  modifyDeficit: 0,
}

class App extends Component{
  constructor(){
    super();
    this.state = initialState;
  }

// ========================== Sign In ==========================
  // after sign in, load user to App state  
  loadUser = (data) => {
    this.setState({user: data})
  }

  reLoadUser = () => {
    fetch('http://localhost:3000/getUser',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: this.state.user.email})
    })
    .then(response => response.json())
    .then(user => {
      this.loadUser(user);
    })
  }

  // delete state so that the nextPage check can work well
  deleteUserNumber = () => {
    this.setState(Object.assign(this.state.user, {
      weight: 0,
      deficit: 0
    }))
  }

  onIsSignIn = () => {
    this.setState({isSignIn : true});
  }

// ========================== Calculation Weight ==========================
  // check weight input format and set weight state
  onWeightChange = (event) => {
    const value = event.target.value;
    // weight is a number, and not a empty string
    if(!isNaN(value) && value !== ""){
      this.setState(Object.assign(this.state.user, {weight : parseFloat(value)})); 
    }
    else{
      this.setState(Object.assign(this.state.user, {weight : ""}))
    }
  }

  // get deficit option
  onDeficitChange = (event) => {
    this.setState(Object.assign(this.state.user, {deficit : parseInt(event.target.value)}))
  }


// ========================== Check blanks before jump to next page ==========================

  onCheckBeforeNextPage = (toRoute) => {
    this.setState({nextPageMessage : ''})
    const {route} = this.state;
    switch (toRoute) {
      // 2種情況下會連到activity, 在weight calculation, 或是在nextMove
      case 'activity':     
        if (route === 'calculation'){  // calculate weight 頁面的檢查
          const {weight, deficit} = this.state.user;
          if (weight <=1000 &&  weight >= 40){
            if(deficit !== 0){
              this.onRouteChange('activity');
            }
            else{
              this.setState({nextPageMessage: "Choose deficit."})
            }
          }
          else{
            this.setState({nextPageMessage: "Wrong body weight"})
          }

        }
        else if (route === 'nextMove'){  // nextMove頁面的檢查
          const {maintainRate, modifyDeficit} = this.state;
          if(maintainRate === false && modifyDeficit === 0){
            this.setState({nextPageMessage: "Choose deficit."})
          }
          else{
            this.onRouteChange('activity');
          }
        }

        break;

      case 'exercise':    // activity 頁面的檢查
        const {activity} = this.state;
        if(activity.length === 7 && !activity.includes(undefined)){
          this.onRouteChange('exercise');
        }
        else{
          this.setState({nextPageMessage: "Choose options."})
        }
        break;

      case 'result':   // exercise 頁面的檢查
        const {exercise} = this.state;
        if(exercise.length === 7 && !exercise.includes(undefined)){
          this.onRouteChange('result');
          this.calculateNutrition();
        }
        else{
          this.setState({nextPageMessage: "Choose options."})
        }
        break;

      default:
        console.log("default")
    }
  }

// ========================== Routing ==========================
  // set route state
  onRouteChange = (route) => {
    // 1. if already sign in, can access to anywhere
    if(this.state.isSignIn){ 
      if(route === 'signin'){ // actually is "sign out" button
        this.setState(initialState);
      }
      else{
        // once get into the calculation page, delete weight and deficit state to fit the check
        if(route === 'calculation'){ 
          this.deleteUserNumber();
        }
        else if(route === 'nextMove'){
          this.reLoadUser();
        }
        this.setState({route : route});
      }
    }
    // 2. to some certain pages, users need to sign in first
    else{
      if(route === 'calculation' || route === 'nextMove' || route === 'result' || route === 'signin'){
        this.setState({route : 'signin'});
      }
      else{ // "how it works" page doesn't need permission
        this.setState({route : route});
      }     
    }
    window.scrollTo(0, 0); //scroll page to top 
  }


// ========================== Choose activity and exercise amount ==========================
  // 把原本的onClick改為onChange，按下之後，要把同一組其他的default設為false，再把自己的設為true
  // onclick, 1. save option value to activity state, save checked (true/ false) to checked state.
  onActExeAmount = (event) => {
    const index = (event.target.name).slice(-1); // get "1" of name: "activity1"
    const type = (event.target.name).slice(0, -1); // get "activity" or "exercise" of name: "activity1"
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str

    let copyTypeState = this.state[type].slice(); // "activity" or "exercise" state
    copyTypeState[index-1] = parseInt(event.target.value);

    let copyCheckedState = this.state[checkedStr].slice(); // checkedActivity or checkedExercise state
    copyCheckedState[index-1] = [false, false, false, false];
    copyCheckedState[index-1][event.target.value] = true;

    this.setState({
      [type] : copyTypeState,  // activity or exercise state
      [checkedStr] : copyCheckedState  // checkedActivity or checkedExercise state
    })
  }

  // when user leaves activity and exercise pages, delete data
  onDeleteActExeOption = (type) => { // type is activity or exercise
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str
    // in activity and exercise pages, nextPage button delete data repactively
    this.setState({
      [checkedStr] : initialchecked,
    })
  }

  // load activity and exercise settings of last week
  onLoadActExe = (event) => {
    const type = event.target.name; //activity or exercise
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str

    // fetch(`https://gentle-badlands-25513.herokuapp.com/${type}`, {
    fetch(`http://localhost:3000/${type}`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email: this.state.user.email})
    })
    .then(response => response.json())
    .then(result => {
      if(result==="No saved record! please choose the options."){
        alert(result);
      }
      else{      
        delete result['email'];
        const optionArr = Object.values(result);
        this.setState({
          [type] : optionArr,
          [checkedStr] : this.getWeekOption(optionArr)
          // call getWeekOption function, set checked state 
        })
      }
    })
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

// ========================== Calculate nutrition result ==========================
  // do calculation and save to state
  calculateNutrition = () => {
    const {email, weight, deficit} = this.state.user;
    const {activity, exercise, modifyDeficit} = this.state; 
    
    const protein = weight * 2; // protein fixes to 2 times weight
    const oil = weight * 1; // oil fixes to 1 time weight

    let dailyCalorie = [];
    let dailyCarbon = [];
    const totalDeficit = parseInt(deficit) + parseInt(-modifyDeficit);
    // deficit from user data + the modifyDeficit of next move = the new deficit
    // calculate day1-7
    for(let i=0; i<7; i++){
      // total calorie of that day (-deficit, plus speed up or slow down option)
      dailyCalorie[i] = parseInt(weight * 2.2 * (12 + parseInt(activity[i]) + parseInt(exercise[i]))) - totalDeficit;
      // carbohydrate of that day
      dailyCarbon[i] = parseInt((dailyCalorie[i] - protein * 4 - oil * 9) / 4);
    }
    // save these numbers to state
    this.setState({
      protein : protein,
      oil : oil,
      dailyCalorie : dailyCalorie,
      dailyCarbon : dailyCarbon    
    });
    this.setState(Object.assign(this.state.user, {deficit: totalDeficit}));

    // save data to database
    // fetch('https://gentle-badlands-25513.herokuapp.com/calculate', {
    fetch('http://localhost:3000/calculate', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        weight: weight,
        deficit: totalDeficit, //refresh user deficit with modify part
        activity: activity,
        exercise: exercise,
        dailyCalorie : dailyCalorie,
        dailyCarbon : dailyCarbon
      })
    })
    .then(response => response.json())
    .then(result => console.log(result));
  }

// ========================== Next Move ==========================
  // choose speed up or slow down and show options (-100/ +100...)
  onModifySpeed = (event) => {
    if(event.target.name === 'maintain'){
      this.setState({
        maintainRate : true,
        modifyDeficit : 0,
        modifySpeedUp : false,
        modifySlowDown : false
      })
    }
    else if(event.target.name === 'speedUp'){
      this.setState({
        maintainRate : false,
        modifySpeedUp : true,
        modifySlowDown: false
      })
    }
    else if(event.target.name === 'slowDown'){
      this.setState({
        maintainRate : false,
        modifySpeedUp : false,
        modifySlowDown: true
      })
    }
  } //event.target.value = Speed Up, name=X

  // choose calorie option (-100/ +100...)
  onModifyDeficit = (event) => {
    this.setState({
      maintainRate : false,
      modifyDeficit: event.target.value
    });
  } 

// ========================== Check Latest Nutrition Result ==========================
  // get latest calculation result
  getResult = () => {
    // fetch('https://gentle-badlands-25513.herokuapp.com/result', {
    fetch('http://localhost:3000/result', {
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: this.state.user.email})
    })
    .then(response => response.json())
    .then(result => {
      const {weight, deficit} = result.user;
      const {userCalorie, userCarbon, userActivity, userExercise} = result;
    // first time loggin, no latest result 
      if(weight === 0){
        alert("No record! Why don't we do it from the beginning?");
        this.onRouteChange('calculation');
      }
      else{
        this.setState(Object.assign(this.state.user, {
          weight: weight,
          deficit: deficit
        }))
        delete userCalorie.email;
        delete userCarbon.email;
        delete userActivity.email;
        delete userExercise.email;
        this.setState({
          protein: weight*2,
          oil: weight,
          dailyCalorie: Object.values(userCalorie),
          dailyCarbon: Object.values(userCarbon),
          activity: Object.values(userActivity),
          exercise: Object.values(userExercise) 
          });
        this.onRouteChange('result');
      }}
    )
    .catch(console.log)
  }


// ========================== Rendering ==========================
  // decide render components
  renderSwitch = (route) => {
    switch (route){
      case 'home':
        return  <Home
                onRouteChange = {this.onRouteChange} 
                />
      case 'signin':
        return <SignIn
                loadUser = {this.loadUser}
                onRouteChange = {this.onRouteChange}
                onIsSignIn = {this.onIsSignIn}
                />
      case 'signup':
        return <SignUp
                loadUser = {this.loadUser}
                onRouteChange = {this.onRouteChange}
                onIsSignIn = {this.onIsSignIn}
                />
      case 'howItWorks':
        return <ExplanationCardList/>
      case 'calculation':
        return <Weight
                onWeightChange = {this.onWeightChange}
                // onBMRCalculate = {this.onBMRCalculate}
                weight = {this.state.user.weight}
                deficit = {this.state.user.deficit}
                // bmr = {this.state.BMR}
                onRouteChange = {this.onRouteChange} 
                onDeficitChange = {this.onDeficitChange} 
                // onDeleteBMR = {this.onDeleteBMR}
                weightMessage = {this.state.weightMessage}
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      case 'activity':
        return <Activity
                onRouteChange = {this.onRouteChange}  
                onActExeAmount = {this.onActExeAmount}
                onChange={this.onChange}
                onLoadActExe = {this.onLoadActExe}  
                optionCheckedState = {this.state.checkedActivity}
                onDeleteActExeOption = {this.onDeleteActExeOption}
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      case 'exercise':
        return <Exercise
                onRouteChange = {this.onRouteChange}  
                onActExeAmount = {this.onActExeAmount}
                calculateNutrition = {this.calculateNutrition}
                onLoadActExe = {this.onLoadActExe}  
                optionCheckedState = {this.state.checkedExercise}
                onDeleteActExeOption = {this.onDeleteActExeOption}
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      case 'result':
        return <Nutrition
                onRouteChange = {this.onRouteChange}
                name = {this.state.user.name}
                deficit = {this.state.user.deficit}
                protein = {this.state.protein}
                oil = {this.state.oil}
                activity = {this.state.activity}
                exercise = {this.state.exercise}
                dailyCalorie = {this.state.dailyCalorie}
                dailyCarbon = {this.state.dailyCarbon}
                />
      case 'nextMove':
        return  <RateCalculation
                maintainRate = {this.state.maintainRate}
                deficit = {this.state.user.deficit}
                onModifySpeed = {this.onModifySpeed}
                modifySpeedUp = {this.state.modifySpeedUp}
                modifySlowDown = {this.state.modifySlowDown}
                onModifyDeficit = {this.onModifyDeficit}
                onRouteChange = {this.onRouteChange}
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      default:
        return 
    }
  }

  render(){
    return(
      <div>
        {/* <Navigation
        onRouteChange = {this.onRouteChange}
        isSignIn = {this.state.isSignIn} 
        /> */}
        <NavbarDrop
          name = {this.state.user.name}
          onRouteChange = {this.onRouteChange}
          isSignIn = {this.state.isSignIn} 
          getResult = {this.getResult}
        />
        <div>
          {this.renderSwitch(this.state.route)}
        </div>
        <br/>
        {this.state.maintainRate.toString()}
        <br/>
        {this.state.modifyDeficit}
        <br/>
        {this.state.user.weight}
      </div>
    )
  }

}

// className="pl3 pl5-ns "
export default App;
