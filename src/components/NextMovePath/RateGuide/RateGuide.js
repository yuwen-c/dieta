import React from 'react';

// based on rate, showing guide on screen
const RateGuide = ({showGuide, RateGuideSuggestions}) => {
    if(!showGuide){
        return null
    }
    else{
    return(
        <div id="cardDiv" className="pa3 w5">
            <article className="ba pv1 br2 b--light-silver shadow-1">     
                <div className="ph3">
                    <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                        <h3>
                        {RateGuideSuggestions.rate}
                        </h3>      
                    </div>  
                    <div className=" b lh-copy pb2">{RateGuideSuggestions.result}</div>
                    <p className="mb2"> 
                    {RateGuideSuggestions.suggestion1}
                    </p>
                    <p>
                    {RateGuideSuggestions.suggestion2}
                    </p>
                </div>
            </article>   
        </div>
    )}
}
    // if(rate <= -0.005 && rate > -0.015){
    //     return(
    //         <div className="">
    //             <dl className="f5 lh-title mv2">
    //               <dt className="dib b pb1" key="1"> Lose 0.5% - 1% weight:</dt><br/>
    //               <dd className="dib ml0 near-gray" key="2">Normal rate, keep going.</dd><br/>
    //               <dd className="dib ml0 near-gray" key="3">If you have been losing weight with this rate over 3 -4weeks,</dd><br/>
    //               <dd className="dib ml0 near-gray" key="4">a 2 - 7 day "break" are suggested.</dd><br/>
    //               <dd className="dib ml0 near-gray" key="5">Add 200 - 400 Kcal per day during break.</dd><br/>
    //             </dl>
    //         </div>            
    //     )
    // }
    // else if (rate <= -0.015){
    //     return(
    //         <div className="">           
    //             <dl className="f5 lh-title mv2">
    //               <dt className="dib b pb1"> Lose 1.5% - 2% or more:</dt><br/>
    //               <dd className="dib ml0 near-gray">A little bit too fast, keep watching it.</dd><br/>
    //               <dd className="dib ml0 near-gray">If you have been losing weight with this rate over 2 - 3 weeks,</dd><br/>
    //               <dd className="dib ml0 near-gray">highly recommend you to take a week "break".</dd><br/>
    //               <dd className="dib ml0 near-gray">Add 300 - 500 Kcal per day during break.</dd><br/>
    //             </dl>
    //         </div>
    //     )
    // }
    // else if(rate > -0.005 && rate !== 0){
    //     return(
    //         <div className="">
    //             <dl className="f5 lh-title mv2">
    //               <dt className="dib b pb1"> Lose less than 0.5%:</dt><br/>
    //               <dd className="dib ml0 near-gray">Keep trying, you just need more practice.</dd><br/>
    //               <dd className="dib ml0 near-gray">Try to record your calorie with more accuracy,</dd><br/>
    //               <dd className="dib ml0 near-gray">and have a steady deficit every day.</dd><br/>
    //               <dd className="dib ml0 near-gray">If the above two things you're doing right,</dd><br/>
    //               <dd className="dib ml0 near-gray">and you're stuck here for more than 2 weeks, then speed up.</dd><br/>
    //             </dl>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div></div>
    //     )
    // }
    


export default RateGuide;