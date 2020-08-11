import React from 'react';

const Navigation = () => {
    return(
        <div>
            <header class="bg-white black-80 tc pv4 avenir">
              <h1 class="mt2 mb0 baskerville i fw1 f1">dieta</h1>
              {/* <h2 class="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2> */}
              <nav class="bt bb tc mw7 center mt4">
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >Home</div>
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >Sign In</div>
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >Sign Up</div>
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >計算本週卡路里</div>
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >本週計算結果</div>
                <div class="f6 f5-l link dib dim black-80 pa3 ph4-l" >下週進行調整</div>
              </nav>
            </header>
        </div>
    )
}

export default Navigation;