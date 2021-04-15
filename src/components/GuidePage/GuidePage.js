import React, { useRef } from 'react';
import photo_calculate from '../../photo/Dieta_calculate.png';
import photo_activity from '../../photo/Dieta_activity.png';
import photo_nutrition from '../../photo/Dieta_nutrition.png';
import photo_nextmove from '../../photo/Dieta_nextmove.png';
import Emoji from '../Emoji/Emoji';
import { useTranslation } from 'react-i18next';

const GuidePage = () => {
    const { t } = useTranslation();

    const firstTime = useRef(null);
    const secondTime = useRef(null);
    const newRound = useRef(null);
    const result = useRef(null);

    // direct to certain part:
    const scrollTo = (ref) => {
        ref.current.scrollIntoView();
    }

    return (
        <article className="pa4 pa5-ns center w-50-l mw6">
            <nav >
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" href="#firstTime" onClick={(event) => {scrollTo(firstTime); event.preventDefault()}}>{t('guidePage.nav1st')}</a>
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" href="#secondTime" onClick={(event) => {scrollTo(secondTime); event.preventDefault()}}>{t('guidePage.nav2nd')}</a>
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" href="#newRound" onClick={(event) => {scrollTo(newRound); event.preventDefault()}}>{t('guidePage.navAgain')}</a>
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" href="#result" onClick={(event) => {scrollTo(result); event.preventDefault()}}>{t('guidePage.navResult')}</a>
            </nav>
            <header className="pv4">
                <h4 className="f3 fw7 tracked lh-title mt0 mb3">
                    <Emoji emoji="🎯" label="bullseye" />{t('guidePage.cta')}</h4>
                <h4 className="f3 fw6 lh-title mt0">{t('guidePage.tryIt')}</h4>
                <h4 className="f3 fw6 lh-title mt0">{t('guidePage.signUp')}</h4>
            </header>
            <section ref={firstTime} className="mb5">
                <h4 className="f3 fw6 lh-title mt0">{t('guidePage.nav1st')}<Emoji emoji="☝" label="index pointing up" />：</h4>
                <ul>
                    <li>{t('guidePage.1stRoute')}</li>
                    <li>{t('guidePage.enter')}</li>
                </ul>
                <img src={photo_calculate} className="w-100 f5 measure" alt="Dieta_calculate" />


                <ul>
                    <li>{t('guidePage.selectLevel')}</li>
                </ul>
                <img src={photo_activity} className="w-100 f5 measure" alt="Dieta_activity" />

                <ul>
                    <li>{t('guidePage.nutrition')}</li>
                </ul>
                <img src={photo_nutrition} className="w-100 f5 measure" alt="Dieta_nutrition" />

            </section>

            <section ref={result} className="mb5">
            <h4 className="f3 fw6 lh-title mt0">{t('guidePage.navResult')}<Emoji emoji="🤙" label="call me" />：</h4>
                <ul>
                    <li>{t('guidePage.resultRoute')}</li>
                </ul>
            </section>

            <section ref={secondTime} className="mb5">
                <h4 className="f3 fw6 lh-title mt0">{t('guidePage.nav2nd')}<Emoji emoji="✌" label="victory hand" />：</h4>
                <ul>
                    <li>{t('guidePage.restriction')}</li>
                    <li>{t('guidePage.2ndRoute')}</li>
                    <li>{t('guidePage.getAdvice')}</li>
                    <li>{t('guidePage.adjustment')}</li>
                </ul>
                <p className="b"><Emoji emoji="🎯" label="bullseye" />{t('guidePage.resultOriented')}</p>
                <img src={photo_nextmove} className="w-100 f5 measure" alt="Dieta_nextmove" />

                <ul>
                    <li>{t('guidePage.selectLevelAgain')}</li>
                </ul>
                <p className="b"><Emoji emoji="👑" label="crown" />{t('guidePage.tipLoad')}</p>

                <ul>
                    <li>{t('guidePage.nutrition')}</li>
                </ul>
            </section>

            <section ref={newRound} className="mb5">
                <h4 className="f3 fw6 lh-title mt0">{t('guidePage.navAgain')}<Emoji emoji="🤟" label="love-you gesture" />：</h4>
                <ul>
                    <li>{t('guidePage.againRoute')}</li>
                    <li>{t('guidePage.againDuring')}</li>
                </ul>
            </section>
        </article>
    )
}

export default GuidePage;