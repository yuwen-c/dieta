import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({onRouteChange, onGuestLogin}) => {
  const { t } = useTranslation();

    return(
        <div className="mt5">
            <article className="mw7 center ph3 ph5-ns tc br2 pv5 bg-washed-green dark-green mb5">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                {t('home.slogan')}
              </h1>
              <h2 className="fw4 f4 lh-copy mt0 mb3 ph4">
                {t('home.description')}
              </h2>
              <div className="pt3">
                <div className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr1"
                onClick={() => {onRouteChange('howItWorks')}} >
                {t('home.option')}</div>
                <div className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib ml1 animate__animated animate__pulse animate__infinite"
                onClick={onGuestLogin} >
                {t('sign_up.try')}</div>
              </div>
            </article>            
        </div>
    )
}

export default Home;
