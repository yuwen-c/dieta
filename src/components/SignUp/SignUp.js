import React, { Component } from 'react';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            message: ''
        }
    }

    onGuestLogin = () => {
        const guestUser = {
            name: 'Guest',
            email: 'guest',
            weight: 0,
            deficit: 0
        }
        this.props.loadUser(guestUser);
        this.props.onRouteChange('howItWorks');
        this.props.onIsSignIn();
    }

    onNameChange = (event) => {
        this.setState({name : event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email : event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    onSignUp = () => {
        const {name, email, password} = this.state;
        if(name && email && password){
            // fetch('https://gentle-badlands-25513.herokuapp.com/signup', {
            fetch('http://localhost:3000/signup', {
                method: 'post', 
                headers: {'Content-Type' : 'application/json'},
                body : JSON.stringify(this.state)
                }
            )
            .then(response => response.json())
            .then(result => {
                if(result.name){
                    this.props.loadUser(result);
                    this.props.onRouteChange('howItWorks');
                    this.props.onIsSignIn();
                }
                else{
                    this.setState({message : result});
                }
            })
            .catch(console.log);
        }
        else{
            this.setState({message : 'Enter your data please.'})
        }
    }

    // guest sign up function:
    // like normal sign up, create new user in database,
    // fetch and save data


    // this.props.loadUser(result);                    
    // this.props.onSaveCalculation(deficit, dailyCalorie, dailyCarbon);
    // this.props.onRouteChange('result'); // normal user, sign up=> howitworks, guest sign up => result
    // this.props.onIsSignIn();
    // 如果App class user = guest, 那點選註冊時，就要
    onGuestSignUp = () => {
        // const {name, email, password} = this.state;
        if(this.props.name !== "Guest"){
            console.log("onguest, if")
            this.onSignUp();
        }
        else{
            console.log("onguest, else")
            this.props.loadUser(this.state);
            const {deficit, dailyCalorie, dailyCarbon} = this.props;        
            this.onSignUp();
            this.props.onSaveCalculation(deficit, dailyCalorie, dailyCarbon);
        }

    }

    render(){
        // a original version of sign up button, and a guest user after calculation, sign up button
        const button = this.props.name !== 'Guest' ?
        
        <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Sign up"
        onClick={this.onSignUp}
        />
        </div>
        

        :

        <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Guest Sign up"
        onClick={this.onGuestSignUp} // guest signup, store calculation result
        />
        </div>

        return(
            <div>
                <div className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 flex">
                                <div>
                                    Sign Up
                                </div>

                                <div className="pl5">
                                    <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="隨便逛逛"
                                    onClick={this.onGuestLogin}
                                    />
                                </div>
                            </legend>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                               <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-50" 
                                type="name" name="name"  id="name"
                                onChange={this.onNameChange}
                               />
                            </div>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                               <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email-address"
                                onChange={this.onEmailChange}
                               />
                            </div>
                            <div className="mv3">
                              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                              <input 
                               className="b pa2 input-reset ba hover-bg-black hover-white w-100" 
                               type="password" name="password"  id="password"
                               onChange={this.onPasswordChange}
                               />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign up"
                            onClick={this.onGuestSignUp}
                            />
                        </div>
                        {/* {button} */}
                        <div className="lh-copy mt3">
                            <p 
                            className="f5 link dark-pink db"
                            >{this.state.message}</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;