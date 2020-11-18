import React from 'react';
import { useTranslation } from 'react-i18next';

const NextPage = ({onRouteChange, onCheckBeforeNextPage, nextPageMessage}) => {
    const {t, i18n} = useTranslation();
    
    return(
        <div className="relative">
            <div className=" ma3">
                <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                value={t('button.name')}
                onClick={onCheckBeforeNextPage}
                />
                <span
                id="spanId" className="f5 link dark-pink absolute bottom-1"
                >{nextPageMessage}</span> 
            </div>
        </div>
    )
}

export default NextPage;
