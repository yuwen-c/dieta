import React from 'react';
import './Options.css';
import { useTranslation } from 'react-i18next';

const Options = ({style, item, name, onActExeAmount, optionCheckedState}) => {
    const { t } = useTranslation();
    // The for attribute of <label> must be equal to the id attribute of the related element 
    return(
        <div id="cardDiv" className="pa2 dib w5 center">
            <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
                <div className="ph3">
                    <div className="br2" style={style}>
                        <h3 >
                        {t('options.day', {item: item})}
                        </h3>      
                    </div>                   
                    <div className="flex items-center mb2">
                        <input 
                        className="mr2" type="radio" id={`${name}-rare`} value="0" name={name}
                        onChange={onActExeAmount} // use onChange istead of onClick to meet the checked's need
                        checked={optionCheckedState[0]}
                        />
                        <label htmlFor={`${name}-rare`} className="lh-copy">{t('options.rare')}</label>
                    </div>
                    <div className="flex items-center mb2">
                        <input 
                        className="mr2" type="radio" id={`${name}-low`} value="1" name={name}
                        onChange={onActExeAmount}
                        checked={optionCheckedState[1]}
                        />
                        <label htmlFor={`${name}-low`} className="lh-copy">{t('options.low')}</label>
                    </div>
                    <div className="flex items-center mb2">
                        <input 
                        className="mr2" type="radio" id={`${name}-medium`} value="2" name={name}
                        onChange={onActExeAmount}
                        checked={optionCheckedState[2]}
                        />
                        <label htmlFor={`${name}-medium`} className="lh-copy">{t('options.medium')}</label>
                    </div>
                    <div className="flex items-center mb2">
                        <input 
                        className="mr2" type="radio" id={`${name}-high`} value="3" name={name}
                        onChange={onActExeAmount}
                        checked={optionCheckedState[3]}
                        />
                        <label htmlFor={`${name}-high`} className="lh-copy">{t('options.high')}</label>
                    </div>
                </div>
            </article>           
        </div>
    )
}

export default Options; 