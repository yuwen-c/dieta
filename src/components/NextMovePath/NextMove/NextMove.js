import React from 'react';
import ModifyOptions from '../ModifyOptions/ModifyOptions';
import { useTranslation } from 'react-i18next';

const NextMove = ({maintainRate, deficit, onModifySpeed, modifySpeedUp, modifySlowDown, onModifyDeficit, onRouteChange}) => {
    const { t } = useTranslation();
    return(  
        <div className="">
            <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                <h3>
                    {t('next.title')}
                </h3>      
            </div>                
            <div className="">
                <div className="b lh-copy pb2">
                    - {t('next.question1')}<br/>
                    - {t('next.question2')}<br/>
                    - {t('next.question3')}<br/>
                    - {t('next.question4')}
                </div>
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value={t('next.maintain')}
                    name="maintain"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                      {t('next.maintainPS')}
                    </small>
                    {maintainRate ? 
                    <p>{t('next.currentDeficit')} <span>{deficit}</span> Kcal.</p>
                    : 
                    null}
                </div>
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value={t('next.speedUp')}
                    name="speedUp"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                        {t('next.speedUpPS')}
                    </small>
                </div>
                <ModifyOptions
                modifySpeedUp={modifySpeedUp}
                onModifyDeficit={onModifyDeficit}
                />
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value={t('next.slowDown')}
                    name="slowDown"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                        {t('next.slowDownPS')}
                    </small>
                </div>
                <ModifyOptions
                modifySlowDown={modifySlowDown}
                onModifyDeficit={onModifyDeficit}
                />
            </div>           
        </div>     
    )
}

export default NextMove;