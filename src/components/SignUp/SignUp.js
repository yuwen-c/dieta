import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

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
        this.props.refreshWholeUser(guestUser);
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

    onSignUpFetch = (name, email, password) => {
        const user = {
            name: name, 
            email: email,
            password: password
        }
        return fetch('https://gentle-badlands-25513.herokuapp.com/signup', {
        // return fetch('http://localhost:3000/signup', {
            method: 'post', 
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify(user)
            }
        )
        .then(response => response.json())  
        .catch(console.log)
    }

    // sign up, 2 conditions, normal user and guest
    onSignUp = () => {
        const {name, email, password} = this.state;
        if(name && email && password){
            if(this.props.name !== "Guest"){ // normal user sign up
                this.onSignUpFetch(name, email, password)
                .then(result => {
                    if(result.name){
                        this.props.refreshWholeUser(result);
                        this.props.onRouteChange('howItWorks');
                        this.props.onIsSignIn();
                    }
                    else{
                        let errMes = this.props.t("sign_up.error.fail");
                        this.setState({message : errMes});
                    }     
                })
                .catch(console.log)
            }
            else{                            // guest user sign up
                this.onSignUpFetch(name, email, password)
                .then(result => {
                    if(result.name){ 
                        const {deficit, dailyCalorie, dailyCarbon} = this.props;  
                        this.props.onSaveCalculation(result.email, deficit, dailyCalorie, dailyCarbon);
                        this.props.refreshPartialUser(result); 
                        this.props.onIsSignIn();
                        this.props.onRouteChange('result'); 

                    }
                    else{
                        let errMes = this.props.t("sign_up.error.fail");
                        this.setState({message : errMes});
                    }     
                })
                .catch(console.log)          
            }
        }
        else{
            let errMes = this.props.t('sign_up.error_blank');
            this.setState({message : errMes})
        }
    }

    componentDidMount = () => {
        fetch('https://gentle-badlands-25513.herokuapp.com/')
        .then(response => response.json())
        .then(result => console.log(result))
    }

    render(){
        return(
            <div>
                <div className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 flex">
                                <div>
                                    {this.props.t('sign_up.title')}
                                </div>

                                <div className="pl5">
                                    <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value={this.props.t('sign_up.try')}
                                    onClick={this.onGuestLogin}
                                    />
                                </div>
                            </legend>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" htmlFor="name">{this.props.t('sign_up.name')}</label>
                               <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-50" 
                                type="name" name="name"  id="name"
                                onChange={this.onNameChange}
                               />
                            </div>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" htmlFor="email-address">{this.props.t('sign_up.email')}</label>
                               <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email-address"
                                onChange={this.onEmailChange}
                               />
                            </div>
                            <div className="mv3">
                              <label className="db fw6 lh-copy f6" htmlFor="password">{this.props.t('sign_up.password')}</label>
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
                            value={this.props.t('sign_up.button')}
                            onClick={this.onSignUp}
                            />
                        </div>
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

// export default SignUp;
export default withTranslation()(SignUp);