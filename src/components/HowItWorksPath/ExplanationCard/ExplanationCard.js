import React from 'react';
import './ExplanationCard.css';

const ExplanationCard = ({title, description, color}) => {

    return(
        <div className="pa2 pv3 center w5 ">
            <article className="ba pv1 br2 b--light-silver shadow-1">
                <div className="ph3">
                    <div className={`br2 ${color === 'yellow' ? 'bg-yellow' : 'bg-light-blue' }`}>
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