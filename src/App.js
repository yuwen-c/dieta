import React, { Component } from 'react';
import Weight from './Weight';
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
import Description from './Description';


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

  weight : 0,     // the first time user entering weight***
  BMR : 0,
  isSignIn : false,
  route: 'home', // sign in, sign up, weight, activity, exercise, nutrition 新增 description, rate

  deficitOption : 0,  // the first time user choosing deficit*****
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

  // after sign in, load user to App state
  loadUser = (data) => {
    this.setState({user: data})
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
  
  onIsSignIn = () => {
    this.setState({isSignIn : true});
  }

  // set route and isSignIn state 如果登入有符合，或是註冊成功，isSignIn => true
  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState(initialState)
    }
    // else if(route === 'description' ){
    //   this.setState({isSignIn : true})
    // }
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
      this.setState({deficitOption : event.target.value})
    }  
  }

  // load activity and exercise settings of last week
  onLoadOptions = () => {
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

  // do calculation and save to state
  calculateNutrition = () => {
    // 使用者非第一次登入，要直接看計算結果，此時this.state裡面不會有deficit, weight, 要從this.state.user抓過來
    if(this.state.deficitOption === 0){
      this.setState({
        deficitOption: this.state.user.deficit,
        weight: this.state.user.weight
      })
    }
    const {weight, deficitOption, activity, exercise, modifyOption} = this.state; 

    const protein = weight * 2; // protein fixes to 2 times weight
    const oil = weight * 1; // oil fixes to 1 time weight

    let dailyCalorie = [];
    let dailyCarbon = [];
    const totalDeficit = parseInt(deficitOption) + parseInt(-modifyOption);
    // saved deficitOption from last time + the modifyDeficti of next move = the new deficit

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

    // save data to database
    fetch('http://localhost:3000/calculate', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.user.email,
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

  // nextmove, choose speed up or slow down
  onSendModifyOption = (event) => {
    this.setState({modifyOption: event.target.value});
  } 

  // get latest calculation result
  getResult = () => {
    const {weight} = this.state.user
    // first time loggin, no latest result 
    if(weight === 0){
      alert("No record! Why don't we do it from the beginning?");
      this.onRouteChange('weight');
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
      this.onRouteChange('nutrition');
    }

  }

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
                loadUser = {this.loadUser}
                onRouteChange = {this.onRouteChange}
                onIsSignIn = {this.onIsSignIn}
                />
      case 'signup':
        return <SignUp
                loadUser = {this.loadUser}
                onRouteChange = {this.onRouteChange}
                />
      case 'description':
        return <Description
                onRouteChange = {this.onRouteChange}
                />
      case 'weight':
        return <Weight
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
        onRouteChange = {this.onRouteChange}
        isSignIn = {this.state.isSignIn} 
        /> */}
        <NavbarDrop
          name = {this.state.user.name}
          onRouteChange = {this.onRouteChange}
          isSignIn = {this.state.isSignIn} 
          getResult = {this.getResult}
        />
        <div className="pl3 pl5-ns mw6-ns">
          {this.renderSwitch(this.state.route)}
        </div>
        {this.state.isSignIn.toString()}
      </div>
    )
  }

}


export default App;
