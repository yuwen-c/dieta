import React from 'react';

const Home = () => {
    return(
        <div>
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                Your Calorie Calculator.
              </h1>
              <h2 className="fw2 f4 lh-copy mt0 mb3">
                This will change things. And we want you to be involved. This text needs to
                be longer for testing sake.
              </h2>
              <p className="fw1 f5 mt0 mb3">
                Sign up for beta access or learn more about Dieta.
              </p>
              <div>
                <p className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                  >
                  Sign Up
                </p>
                <p className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                  >
                  Learn More
                </p>
              </div>
            </article>            
        </div>
    )
}

export default Home;