import React from 'react';
import ExplanationCard from '../ExplanationCard/ExplanationCard';
import { howItWorks, howToUse} from './explanation';
import './ExplanationCardList.css';


// 字體大小、字型、黃色padding大小、改變另一組card顏色
// 背景容器顏色？ 標題做區隔？
const ExplanationCardList = ( ) => {
    return(
        <div>
            <div className="flex flex-wrap" id="yellow"> 
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
            <div className="flex flex-wrap" id="blue">
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