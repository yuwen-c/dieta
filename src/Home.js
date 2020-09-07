import React from 'react';

const Home = ({onRouteChange}) => {
    return(
        <div>
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                Your Calorie Calculator.
              </h1>
              <h2 className="fw2 f4 lh-copy mt0 mb3 mw6">
                針對體重、每日活動量及運動量，及想要的減重速度，幫你計算每日卡路里。
              </h2>
              {/* <p className="fw1 f5 mt0 mb3">
                
              </p> */}
              <div>
                {/* <p 
                className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                onClick={() => {onRouteChange('signin')}} >
                Sign In</p> */}
                <p className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
                onClick={() => {onRouteChange('signup')}} >
                Learn More</p>
                {/* <p className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
                onClick={() => {onRouteChange('weight')}} >
                Learn More</p>   */}
              </div>
            </article>            
        </div>
    )
}

export default Home;