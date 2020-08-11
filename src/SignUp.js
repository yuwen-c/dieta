import React, { Component } from 'react';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {}
    }



    render(){
        return(
            <div>
                <div className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" for="name">Name</label>
                               <input 
                               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
                               type="name" name="name"  id="name"/>
                            </div>
                            <div className="mt3">
                               <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                               <input 
                               className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                               type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                              <label className="db fw6 lh-copy f6" for="password">Password</label>
                              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                              type="password" name="password"  id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" value="Sign up"/>
                        </div>
                        <div className="lh-copy mt3">
                            <p className="f6 link dim black db">Sign in</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;