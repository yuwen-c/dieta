import React from 'react';

const CalorieDeficit = ({weight, deficit, onDeficitChange}) => {
    let showDeficit;
    if(weight !== 0){
        showDeficit = <p className="b">Your current deficit is <span>{deficit}</span> Kcal per day.</p>
    }
    else{
        showDeficit = null;
    }
    return (
        <div>
            <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                <h3>
                Deficit /day
                </h3>      
            </div>   
            <div className="fw7 f8 pb3">How many calories would you like to reduce?</div> 
            {showDeficit}
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