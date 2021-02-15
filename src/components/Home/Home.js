import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({onRouteChange, onGuestLogin}) => {
  const { t } = useTranslation();

    return(
        <div className="mt5">
            <article className="mw7 center ph3 ph5-ns tc br2 pv4 bg-washed-green dark-green mb4">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                {t('home.slogan')}
              </h1>
              <h2 className="fw4 f4 lh-copy mt0 mb3 ph4">
                {t('home.description')}
              </h2>
              <div className="pt2">
                <div className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr1"
                onClick={() => {onRouteChange('signin')}} >
                {t('home.signin')}</div>
                <div className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr1"
                onClick={() => {onRouteChange('howItWorks')}} >
                {t('home.more')}</div>
                <div className="f5 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib ml1 animate__animated animate__pulse animate__infinite"
                onClick={onGuestLogin} >
                {t('home.tryit')}</div>
              </div>
            </article>            
        </div>
    )
}

export default Home;
