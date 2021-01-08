import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email: '', 
            password: '',
            message: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({email : event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    onSignIn = () => {
        console.log("onSignin")
        const {email, password} = this.state;
        if(email && password){
            fetch('https://gentle-badlands-25513.herokuapp.com/signin', {
            // fetch('http://localhost:3000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state)
            })
            .then(response => response.json())
            .then(result => {
                if(result.name){
                    this.props.refreshWholeUser(result);
                    this.props.onIsSignIn();
                    this.props.onRouteChange('calculation');
                }
                else{
                    let errMes = this.props.t('sign_in.error_fail');
                    this.setState({message : errMes});
                }
            })
            .catch(console.log);
        }
        else{
            let errMes = this.props.t('sign_in.error_blank');
            this.setState({message : errMes});
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
                            <legend className="f4 fw6 ph0 mh0">{this.props.t("sign_in.title")}</legend>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" htmlFor="email-address">{this.props.t("sign_in.email")}</label>
                               <input 
                                className="pa2 input-reset ba hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email-address"
                                onChange={this.onEmailChange}
                               />
                            </div>
                            <div className="mv3">
                              <label className="db fw6 lh-copy f6" htmlFor="password">{this.props.t("sign_in.password")}</label>
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
                            value={this.props.t("sign_in.button")}
                            onClick={this.onSignIn}
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

// export default SignIn;
export default withTranslation()(SignIn);