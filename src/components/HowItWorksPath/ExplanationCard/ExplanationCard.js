import React from 'react';
import './ExplanationCard.css';
import { useTranslation } from 'react-i18next';

const ExplanationCard = ({title, description}) => {
    const {t, i18n} = useTranslation();

    return(
        <div className="pa2 pv3 center w5 ">
            <article className="ba pv1 br2 b--light-silver shadow-1">
                <div className="ph3">
                    <div id="colorDiv" className="br2">
                  {/* set id to show different color  */}
                        <h3 >
                            {title}
                        </h3>      
                    </div>
                    <p id="description">
                        {description}
                    </p>    
                </div>
            </article>           
        </div>
    )
}

export default ExplanationCard;