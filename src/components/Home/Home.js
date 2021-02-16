import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = ({onRouteChange, onGuestLogin}) => {
  const { t } = useTranslation();

    return(
        <div className="mt5 mt6-ns">
            <article className="mw7 center ph3 ph5-ns tc br2 pv4 pv5-ns bg-white near-black mb4">
              <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
                {t('home.slogan')}
              </h1>
              <h2 className="fw4 f4 lh-copy mt0 mb3 ph4">
                {t('home.description')}
              </h2>
              <div className="pt2">
                <div className="f5 br-pill bg-white no-underline near-black ba bw2 b--dark-gray grow pv2 ph2 dib mr1"
                onClick={() => {onRouteChange('signin')}} >
                {t('home.signin')}</div>
                <div className="f5 br-pill bg-white no-underline near-black ba bw2 b--dark-gray grow pv2 ph2 dib mr1"
                onClick={() => {onRouteChange('howItWorks')}} >
                {t('home.more')}</div>
                <div className="f5 br-pill bg-white no-underline near-black ba bw2 b--dark-gray grow pv2 ph2 dib ml1 animate__animated animate__pulse animate__infinite"
                onClick={onGuestLogin} >
                {t('home.tryit')}</div>
              </div>
            </article>            
        </div>
    )
}

export default Home;
