import React, { Component } from 'react';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '', 
            password: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email : event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    onSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(result => {
            if(result.name){
                this.props.loadUser(result); // refresh App user state
                this.props.onRouteChange('description');
                this.props.onIsSignIn();
            }
            else{
                console.log('fail to sign in')
            }

        })

    }


    render(){
        return(
            <div>
                <div className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                            value="Sign in"
                            onClick={this.onSignIn}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                            className="f6 link dim black db"
                            onClick={()=> {this.props.onRouteChange("signup")}}>Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;