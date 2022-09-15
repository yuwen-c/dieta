import initialchecked from "./initialchecked";

const initialState = {
  user: {
    name: "",
    email: "",
    weight: 0, //load user data after log in. weight, deficit got refreshed***
    deficit: 0,
  },

  isSignIn: false,
  route: "home", // sign in, sign up, howItWorks, calculation, activity, exercise, result, nextMove

  activity: [], // store week activity, like: [0, 1, 0, 1, 0, 3, 2]
  exercise: [], // store week exercise, like: [0, 1, 0, 1, 0, 3, 2]

  protein: 0,
  oil: 0,
  dailyCalorie: [], // 7 days daily calorie
  dailyCarbon: [], // 7 days daily carbohydrate

  checkedActivity: initialchecked,
  checkedExercise: initialchecked,
  // the default of checked attribute of options

  maintainRate: false,
  modifySpeedUp: false,
  modifySlowDown: false,
  modifyDeficit: 0,

  showNoResultModal: false,
  showNoActExeModal: false,
  showNewsModal: false,

  nextPageMessage: "123",
};

export default initialState;
