import React from 'react';
import ExplanationCard from './ExplanationCard';
import { howItWorks, howToUse} from './explanation';

const ExplanationCardList = ( ) => {
    return(
        <div>
            <div className="flex flex-wrap"> 
            {/* // JSX外面也要包<div></div> */}
            {
                howItWorks.map((item, index) => {
                    return(
                        <ExplanationCard
                        key={item.title}
                        title={item.title} 
                        description={item.description}                         
                        />                
                    )
                })
            }         
            </div>  
            <div className="flex flex-wrap">
            {
                howToUse.map((item, index) => {
                    return(
                        <ExplanationCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        />
                    )
                })
            }
            </div>          
        </div>

    ) 
}

export default ExplanationCardList;