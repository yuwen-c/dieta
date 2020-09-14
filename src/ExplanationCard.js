import React from 'react';
import './ExplanationCard.css';

const ExplanationCard = ({title, description}) => {
    return(
        <div className="pa3">
            <article className="ba  mw5 pv1 mv4 br2 b--light-silver shadow-1">
                <div className="ph3">
                    <div id="colorDiv">
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