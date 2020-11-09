import React from 'react';
import './Navigation.css';


const Navigation = ({ isSign, email, onRouteChange }) => {
  return(
        <div>
            <nav className="flex justify-between bb b--white-10 bg-near-black">
              {/* <div className="dropdown link white-70 hover-white no-underline flex items-center pa3" > */}
              <div className="dropdown link white-70 hover-white no-underline   pa3" >
                <svg
                  className="dib h1 w1"
                  data-icon="grid"
                  viewBox="0 0 32 32"
                  style={{fill:"currentcolor"}}
                  >
                  <title>Super Normal Icon Mark</title>
                  <path 
                  d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z">
                  </path>
                </svg>
                <div className="dropdown-content">
                  <div
                  onClick={() => {onRouteChange("calculation")}}>Calculation</div>
                  <div
                  onClick={() => {onRouteChange('result')}}>Lastest Result</div>
                  <div>Next Move</div>
                </div>
              </div>
              <div className="flex-grow pa3 flex items-center">            
                {/* <div 
                className="f6 link dib white dim mr3 mr4-ns" >About</div> */}
                {
                  isSign === false ? 

                  <div>

                    <div 
                    className="f6 link dib white dim mr3 mr4-ns" 
                    onClick={()=> {onRouteChange("signin")}}>Sign In</div>
                    <div 
                    // className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
                    className="f6 link dib white dim mr3 mr4-ns" 
                    onClick={()=> {onRouteChange("signup")}}>Sign Up</div>

                  </div>

                  : 

                  <div>

                    <div 
                    className="f6 link dib white dim mr3 mr4-ns" 
                    >Hi! {email}</div>
                    <div 
                    className="f6 link dib white dim mr3 mr4-ns" 
                    onClick={()=> {onRouteChange("signin")}}>Sign Out</div>

                  </div>

                }
              </div>
            </nav>

            {/* <MenuListComposition/> */}
        </div>
    )
}

export default Navigation;