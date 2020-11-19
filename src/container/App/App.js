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
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/Modal/ModalContent';
// import { Button } from 'react-bootstrap';
//import { activityTableData, exerciseTableData } from '../../components/CalculationPath/LevelTable/TableData';
import { withTranslation } from 'react-i18next';

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

  isSignIn : false,
  route: 'home', // sign in, sign up, weight, activity, exercise, nutrition 新增 description, rate
  nextPageMessage: '',

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

  showNoResultModal: false,
  showNoActExeModal: false
}

class App extends Component{
  constructor(){
    super();
    // this.state = initialState;
    this.state = JSON.parse(JSON.stringify(initialState)); // avoid pass by reference
  }



// ========================== Sign In ==========================

  fetchUser = (email) => {
    return fetch('https://gentle-badlands-25513.herokuapp.com/user', {
      method: 'post', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email})
    })
    .then(response => response.json())
    .catch(console.log);
  }


  refreshWholeUser = (data) => {
    this.setState({user: data});
  }

  refreshPartialUser = (data) => {
    const {name, email} = data;
    // only refresh user name and email
    this.setState(prevstate => {
      let user = Object.assign({}, prevstate.user);
      user.name = name;
      user.email = email;
      return {user : user};
    })
    return name; 
  }

  // delete state so that the nextPage check can work well
  deleteUserNumber = () => {
    this.setState(prevstate => {
      let user = Object.assign({}, prevstate.user);
      user.weight = 0;
      user.deficit = 0;
      return {user: user}
    })
  }

  onIsSignIn = () => {
    this.setState({isSignIn : true});
  }

// ========================== Calculation Weight ==========================
  // save weight to state
  onWeightChange = (event) => {
    let weightValue = event.target.value;
    this.setState(prevState => {
      let user = Object.assign({}, prevState.user);
      user.weight = parseFloat(weightValue);
      return {user : user}
    })
  }

  // get deficit option
  onDeficitChange = (event) => {
    let deficitValue = event.target.value;
    this.setState(prevstate => {
      let user = Object.assign({}, prevstate.user);
      user.deficit = parseInt(deficitValue);
      return {user : user}
    })
  }


// ========================== Check blanks before jump to next page ==========================

  onCheckBeforeNextPage = (toRoute) => {
    this.setState({nextPageMessage : ''})
    const {route} = this.state;
    switch (toRoute) {
      case 'activity':     
        if (route === 'calculation'){  // checks of calculate weight page 
          const {weight, deficit} = this.state.user;
          if (!isNaN(weight) && weight <=1000 && weight >= 40){
            if(deficit !== 0){
              this.onRouteChange('activity');
            }
            else{
              const errorMes = this.props.t("button.error_deficit");
              this.setState({nextPageMessage: errorMes});
            }
          }
          else{
            const errorMes = this.props.t("button.error_weight");
            this.setState({nextPageMessage: errorMes});
          }
        }
        else if (route === 'nextMove'){  // checks of nextMove page
          const {maintainRate, modifyDeficit} = this.state;
          if(maintainRate === false && modifyDeficit === 0){
            const errorMes = this.props.t("button.error_deficit");
            this.setState({nextPageMessage: errorMes});
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
          this.onDeleteActExeOption('activity');
        }
        else{
          const errorMes = this.props.t("button.error_option");
          this.setState({nextPageMessage: errorMes});
        }
        break;

      case 'result':   // exercise 頁面的檢查
        const {exercise} = this.state;
        if(exercise.length === 7 && !exercise.includes(undefined)){
          this.onRouteChange('result');
          this.onDeleteActExeOption('exercise');
          this.calculateNutrition();
        }
        else{
          const errorMes = this.props.t("button.error_option");
          this.setState({nextPageMessage: errorMes});
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
          this.fetchUser(this.state.user.email) // refresh user when go to nextMove page
          .then(user => this.refreshWholeUser(user))
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
  // 把同一組的default設為false，再把選中的設為true
  // 1. save option value to activity state. 2. save checked (true/ false) to checked state.
  onActExeAmount = (event) => {
    const eventValue = event.target.value;
    const eventName = event.target.name;
    const index = eventName.slice(-1); // get "1" of name: "activity1"
    const type = eventName.slice(0, -1); // get "activity" or "exercise" of name: "activity1"
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str

    let copyTypeState = this.state[type].slice(); // "activity" or "exercise" state
    copyTypeState[index-1] = parseInt(eventValue);

    let copyCheckedState = this.state[checkedStr].slice(); // checkedActivity or checkedExercise state
    copyCheckedState[index-1] = [false, false, false, false];
    copyCheckedState[index-1][eventValue] = true;

    this.setState({
      [type] : copyTypeState,  // activity or exercise state
      [checkedStr] : copyCheckedState  // checkedActivity or checkedExercise state
    })
  }

  // when user leaves activity and exercise pages, delete "checked" state repactively
  onDeleteActExeOption = (type) => { // type is activity or exercise
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str
    this.setState({
      [checkedStr] : initialchecked,
    })
  }

  // load activity and exercise settings of last week
  onLoadActExe = (event) => {
    const type = event.target.name; //activity or exercise
    const checkedStr = `checked`+ type.slice(0,1).toUpperCase()+type.slice(1); // get checkedActivity str or checkedExercise str

    fetch(`https://gentle-badlands-25513.herokuapp.com/${type}`, {
    // fetch(`http://localhost:3000/${type}`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email: this.state.user.email})
    })
    .then(response => response.json())
    .then(result => {
      if(result==="No saved record."){
        this.onShowModal("showNoActExeModal");
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
    .catch(console.log);
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
    const {name, email, weight, deficit} = this.state.user;
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

    this.setState(prevstate => {
      let user = Object.assign({}, prevstate.user);
      user.deficit = totalDeficit;
      return {user : user}
    })
    if(name === 'Guest'){

    }
    else{
      this.onSaveCalculation(email, totalDeficit, dailyCalorie, dailyCarbon);
    }
  }

// save data to database
  onSaveCalculation = (userEmail, deficit, dailyCalorie, dailyCarbon) => {
    const {weight} = this.state.user;
    const {activity, exercise} = this.state; 
      fetch('https://gentle-badlands-25513.herokuapp.com/saveData', {
      // fetch('http://localhost:3000/saveData', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: userEmail,
          weight: weight,
          deficit: deficit, //refresh user deficit with modify part
          activity: activity,
          exercise: exercise,
          dailyCalorie : dailyCalorie,
          dailyCarbon : dailyCarbon
        })
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(console.log);
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
    fetch('https://gentle-badlands-25513.herokuapp.com/result', {
    // fetch('http://localhost:3000/result', {
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
        this.onShowModal('showNoResultModal');
        this.onRouteChange('calculation');
      }
      else{
        this.setState(prevstate => {
          let user = Object.assign({}, prevstate.user);
          user.weight = weight;
          user.deficit = deficit;
          return {user : user}
        })

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

// ========================== Modal ==========================
 
  onShowModal = (modal) => {
    this.setState({[modal] : true});
  }

  onHideModal = (modal) => {
    this.setState({[modal] : false});
  }

// ========================== Rendering ==========================
  // decide rendered components
  renderSwitch = (route) => {
    switch (route){
      case 'home':
        return  <Home
                onRouteChange = {this.onRouteChange} 
                />
      case 'signin':
        return <SignIn
                refreshWholeUser = {this.refreshWholeUser}
                onRouteChange = {this.onRouteChange}
                onIsSignIn = {this.onIsSignIn}
                />
      case 'signup':
        return <SignUp
                name = {this.state.user.name}
                refreshWholeUser = {this.refreshWholeUser}
                refreshPartialUser = {this.refreshPartialUser}
                onRouteChange = {this.onRouteChange}
                onIsSignIn = {this.onIsSignIn}
                onSaveCalculation = {this.onSaveCalculation}
                deficit = {this.state.user.deficit}
                dailyCalorie = {this.state.dailyCalorie}
                dailyCarbon = {this.state.dailyCarbon}
                />
      case 'howItWorks':
        return <ExplanationCardList/>
      case 'calculation':
        return <Weight
                onWeightChange = {this.onWeightChange}
                onDeficitChange = {this.onDeficitChange} 
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      case 'activity':
        return <Activity
                onActExeAmount = {this.onActExeAmount}
                onLoadActExe = {this.onLoadActExe}  
                optionCheckedState = {this.state.checkedActivity}
                onDeleteActExeOption = {this.onDeleteActExeOption}
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      case 'exercise':
        return <Exercise
                onActExeAmount = {this.onActExeAmount}
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
                nextPageMessage = {this.state.nextPageMessage}
                onCheckBeforeNextPage = {this.onCheckBeforeNextPage}
                />
      default:
        return 
    }
  }

  render(){
    const modal = 
      <Modal>
        <ModalContent
          showNoResultModal={this.state.showNoResultModal}
          showNoActExeModal={this.state.showNoActExeModal}
          onHideModal={this.onHideModal}
        />
      </Modal>

    return(
      <div>
        <NavbarDrop
          name = {this.state.user.name}
          onRouteChange = {this.onRouteChange}
          isSignIn = {this.state.isSignIn} 
          getResult = {this.getResult}
        />
        <div>
          {this.renderSwitch(this.state.route)}
        </div>
        {modal}
      </div>
    )
  }

}

// export default App;
export default withTranslation()(App);
