import React from 'react';
import ExplanationCard from './ExplanationCard';
import {titleY, descriptionY, titleB, descriptionB} from './explanation';

const ExplanationCardList = ( ) => {
    return(
        <div>
            <div className="flex"> 
            {/* // JSX外面也要包<div></div> */}
               {
                titleY.map((item, index) => {
                    return(
                        <ExplanationCard
                        key={item}
                        title={item} 
                        description={descriptionY[index]}                         
                        />                
                    )
                })
            }         
            </div>  
            <div className="flex">
                {titleB.map((item, index) => {
                    return(
                        <ExplanationCard
                        key={item}
                        title={item}
                        description={descriptionB[index]}
                        />
                    )
                })}
            </div>          
        </div>

    ) 
}

export default ExplanationCardList;