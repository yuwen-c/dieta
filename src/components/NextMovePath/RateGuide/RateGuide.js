import React from 'react';

// based on rate, showing guide on screen
const RateGuide = ({showGuide, RateGuideSuggestions}) => {
    if(!showGuide){
        return null
    }
    else{
    return(
        <div id="cardDiv" className="pa3">
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

export default RateGuide;