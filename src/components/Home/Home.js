import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({onRouteChange}) => {
  const { t, i18n } = useTranslation();
  const changeLan = (language) => {
    i18n.changeLanguage(language);
  }
    return(
        <div className="mt5">
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                Your Calorie Calculator.
              </h1>
              <h2 className="fw2 f4 lh-copy mt0 mb3 ph4">
                針對體重、每日活動量及運動量，及想要的減重速度，幫你計算每日卡路里。
              </h2>
              <div className="pt3">
                <p className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib"
                onClick={() => {onRouteChange('howItWorks')}} >
                Learn More</p>
              </div>
            </article>            
        </div>
    )
}

export default Home;
