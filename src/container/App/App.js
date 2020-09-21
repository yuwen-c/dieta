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
import NextMove from '../../components/NextMovePath/NextMove/NextMove';
import NavbarDrop from '../../components/NavbarDrop/NavbarDrop';
import ExplanationCardList from '../../components/HowItWorksPath/ExplanationCardList/ExplanationCardList';

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

  BMR : 0,
  isSignIn : false,
  route: 'home', // sign in, sign up, weight, activity, exercise, nutrition 新增 description, rate

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

  onIsSignIn = () => {
    this.setState({isSignIn : true});
  }

// ========================== Calculation Weight ==========================
  // get body weight
  onWeightChange = (event) => {
    this.setState(Object.assign(this.state.user, {weight : event.target.value}))
  }

  // calculate BMR
  onBMRCalculate = () => {
    const bmr = parseInt(this.state.weight*2.2*12);
    this.setState({BMR : bmr});
  } 

  // get deficit option
  onDeficitChange = (event) => {
    this.setState(Object.assign(this.state.user, {deficit : event.target.value}))
  }
  

// ========================== Routing ==========================
  // set route state
  onRouteChange = (route) => {
    // 1. 如果已登入，去哪裡都可以。
    if(this.state.isSignIn){ 
      if(route === 'signin'){ // 已登入狀態下點的是sign out
        this.setState(initialState);
      }
      else{
        this.setState({route : route});
      }
    }
    // 2. 如果未登入，去某些地方時會被要求登入
    else{
      if(route === 'calculation' || route === 'nextMove' || route === 'result' || route === 'signin'){
        this.setState({route : 'signin'});
      }
      else{
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
    copyTypeState[index-1] = event.target.value;

    let copyCheckedState = this.state[checkedStr].slice(); // checkedActivity or checkedExercise state
    copyCheckedState[index-1] = [false, false, false, false];
    copyCheckedState[index-1][event.target.value] = true;

    this.setState({
      [type] : copyTypeState,  // activity or exercise state
      [checkedStr] : copyCheckedState  // checkedActivity or checkedExercise state
    })



    // if(event.target.name.includes('activity')){
    //   // save option value to activity state
    //   let activityArr = this.state.activity.slice(); // use slice() to ensure we create a seperate copy of this.state.activity
    //   activityArr[index-1] = event.target.value; // value="0", "1", "2", "3"
    //   this.setState({activity : activityArr})

    //   // use "checked" attribute to show chosen one
    //   // modify checked state. 1: set 4 options to false, 2: set the one to true
    //   let changedChecked = this.state.checkedActivity.slice(); //只有要改那一組option，不能複製整個initial
    //   changedChecked[index-1] = [false, false, false, false];
    //   changedChecked[index-1][event.target.value] = true;
    //   this.setState({checkedActivity : changedChecked})

    // }
    // // exercise part
    // else if(event.target.name.includes('exercise')){
    //   // save option value to state
    //   let exerciseArr = this.state.exercise.slice(); // a new exercise state array
    //   exerciseArr[index-1] = event.target.value;
    //   this.setState({exercise : exerciseArr});

    //   // modify checked state. 
    //   let changedChecked = this.state.checkedExercise.slice(); 
    //   changedChecked[index-1] = [false, false, false, false];
    //   changedChecked[index-1][event.target.value] = true;
    //   this.setState({checkedExercise : changedChecked})      
    // }
  }

  // load activity and exercise settings of last week
  onLoadActExe = () => {
    if(this.state.route === 'activity'){
      fetch('http://localhost:3000/activity', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email: this.state.user.email})
      })
      .then(response => response.json())
      .then(result => {
          delete result['userEmail'];
          const optionArr = Object.values(result);
          this.setState({
            activity : optionArr,
            checkedActivity : this.getWeekOption(optionArr)
            // call getWeekOption function, set checked state 
          });
      });
    }
    else if(this.state.route === 'exercise'){
      fetch('http://localhost:3000/exercise', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email: this.state.user.email})
      })
      .then(response => response.json())
      .then(result => {
          delete result['userEmail'];
          const optionArr = Object.values(result);
          this.setState({
            exercise : optionArr,
            checkedExercise : this.getWeekOption(optionArr)
            // call getWeekOption function, set checked state 
          });
      });
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

// ========================== Calculate nutrition result ==========================
  // do calculation and save to state
  calculateNutrition = () => {
    const {weight, deficit} = this.state.user;
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
    // save these numbers
    this.setState({
      protein : protein,
      oil : oil,
      dailyCalorie : dailyCalorie,
      dailyCarbon : dailyCarbon    // "let" variable has a different color 
    });
    this.setState(Object.assign(this.state.user, {deficit: totalDeficit}));

    // save data to database
    fetch('http://localhost:3000/calculate', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.user.email,
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

  // choose calorie option (-100/ +100...)
  onModifyDeficit = (event) => {
    this.setState({modifyDeficit: event.target.value});
  } 

// ========================== Check Latest Nutrition Result ==========================
  // get latest calculation result
  getResult = () => {
    const {weight} = this.state.user
    // first time loggin, no latest result 
    if(weight === 0){
      alert("No record! Why don't we do it from the beginning?");
      this.onRouteChange('calculation');
    }
    else{
      fetch('http://localhost:3000/result', {
        method: 'post', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: this.state.user.email})
      })
      .then(response => response.json())
      .then(result => {
        const calorieObj = result.dailyCalorie;
        const carbonObj = result.dailyCarbon;

        delete calorieObj.userEmail;
        delete carbonObj.userEmail;

        this.setState({
        protein: weight*2,
        oil: weight,
        dailyCalorie: Object.values(calorieObj),
        dailyCarbon: Object.values(carbonObj)
        })
      });
      this.onRouteChange('result');
    }

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
        // return <HowItWorks
        //         onRouteChange = {this.onRouteChange}
        //         />
      case 'calculation':
        return <Weight
                onWeightChange = {this.onWeightChange}
                onBMRCalculate = {this.onBMRCalculate}
                bmr = {this.state.BMR}
                onRouteChange = {this.onRouteChange} 
                onDeficitChange = {this.onDeficitChange} 
                />
      case 'activity':
        return <Activity
                onRouteChange = {this.onRouteChange}  
                onActExeAmount = {this.onActExeAmount}
                onChange={this.onChange}
                onLoadActExe = {this.onLoadActExe}  
                optionCheckedState = {this.state.checkedActivity}
                />
      case 'exercise':
        return <Exercise
                onRouteChange = {this.onRouteChange}  
                onActExeAmount = {this.onActExeAmount}
                calculateNutrition = {this.calculateNutrition}
                onLoadActExe = {this.onLoadActExe}  
                optionCheckedState = {this.state.checkedExercise}
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
        return <div>
                  <RateCalculation/>
                  <NextMove
                    onModifySpeed = {this.onModifySpeed}
                    modifySpeedUp = {this.state.modifySpeedUp}
                    modifySlowDown = {this.state.modifySlowDown}
                    onModifyDeficit = {this.onModifyDeficit}
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
        onRouteChange = {this.onRouteChange}
        isSignIn = {this.state.isSignIn} 
        /> */}
        <NavbarDrop
          name = {this.state.user.name}
          onRouteChange = {this.onRouteChange}
          isSignIn = {this.state.isSignIn} 
          getResult = {this.getResult}
        />
        <div >
          {this.renderSwitch(this.state.route)}
        </div>
{/* {this.state.activity}
<br/>
{this.state.checkedActivity.toString()}
<br/>
{this.state.exercise}
<br/>
{this.state.checkedExercise.toString()} */}
        {/* {this.state.isSignIn.toString()} */}
        <br/>
        {/* {this.state.route} */}
      </div>
    )
  }

}

// className="pl3 pl5-ns "
export default App;
