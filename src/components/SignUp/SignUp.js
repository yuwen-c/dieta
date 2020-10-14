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
                    this.setState({message : 'Sign up failure'});
                }
            })
        }
        else{
            this.setState({message : 'Enter your data please.'})
        }
    }
    render(){
        return(
            <div>
                <div className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
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
                            onClick={this.onSignUp}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            {/* <p 
                            className="f6 link dim black db"
                            onClick={()=> {this.props.onRouteChange("signin")}}>Sign in</p> */}
                            <p 
                            className="f5 link black db"
                            >{this.state.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;