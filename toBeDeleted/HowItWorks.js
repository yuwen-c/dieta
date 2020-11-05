import React from 'react';

const HowItWorks = ({onRouteChange}) => {
    return(
        <div>
        <h5>提前計畫可以讓你的減脂更順利！</h5>
        <h6>根據體重計算、所需熱量</h6> 
        <h6>依據活動量運動量做調整</h6>  
        <h6>每週根據減重結果、身體狀況、生活型態，給予不同的建議</h6>     
        <h6>來對下週熱量赤字做調整</h6>
        <h6>對於每週生活步調固定的使用者，可使用load button帶入上週設定</h6>

        {/* <p 
        className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
        onClick={() => {onRouteChange('signup')}}>
        Sign Up</p> */}
        </div>
    )
}

export default HowItWorks;