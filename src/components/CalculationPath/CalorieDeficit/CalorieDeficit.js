import React from 'react';
import { useTranslation } from 'react-i18next';

const CalorieDeficit = ({onDeficitChange}) => {
    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                <h3>
                {t('weight.deficit_title')}
                </h3>      
            </div>   
            <div className="fw7 f8 pb3">{t('weight.question')}</div> 
            <div className="flex items-center mb2">
                <input 
                className="mr2" type="radio" id="300" value="300" name="deficit"
                onClick={onDeficitChange}
                />
                <label htmlFor="300" className="lh-copy">300</label>
            </div>
            <div className="flex items-center mb2">
                <input 
                className="mr2" type="radio" id="400" value="400" name="deficit"
                onClick={onDeficitChange}
                />
                <label htmlFor="400" className="lh-copy">400</label>
            </div>
            <div className="flex items-center mb2">
                <input 
                className="mr2" type="radio" id="500" value="500" name="deficit"
                onClick={onDeficitChange}
                />
                <label htmlFor="500" className="lh-copy">500</label>
            </div>
        </div>
    )
}

export default CalorieDeficit;