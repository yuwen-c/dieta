import React from 'react';

const RateGuide = ({rate}) => {

    if(rate <= -0.005 && rate > -0.015){
        return(
            
                <div className="f5 lh-title mv2">
                  <dt className="dib b pb1" key="1"> lose 0.5% - 1% weight:</dt><br/>
                  <dd className="dib ml0 near-gray" key="2">Normal rate, keep going.</dd><br/>
                  <dd className="dib ml0 near-gray" key="3">If you have been losing weight with this rate over 3 - 4 weeks,</dd><br/>
                  <dd className="dib ml0 near-gray" key="4">a 2 - 7 day "break" are suggested.</dd><br/>
                  <dd className="dib ml0 near-gray" key="5">add 200 - 400 Kcal per day during break.</dd><br/>
                </div>

        )
    }
    else if (rate <= -0.015){
        return(
            <div>
                <dl className="f5 lh-title mv2">
                  <dt className="dib b pb1"> lose 1.5% - 2% or even more:</dt><br/>
                  <dd className="dib ml0 near-gray">A little bit too fast, keep watching it.</dd><br/>
                  <dd className="dib ml0 near-gray">If you have been losing weight with this rate over 2 - 3 weeks,</dd><br/>
                  <dd className="dib ml0 near-gray">highly recommend you to take a week "break".</dd><br/>
                  <dd className="dib ml0 near-gray">add 300 - 500 Kcal per day during break.</dd><br/>
                </dl>
            </div>

        )
    }
    else{
        return(
            <div>
                <dl className="f5 lh-title mv2">
                  <dt className="dib b pb1"> lose less than 0.5%:</dt><br/>
                  <dd className="dib ml0 near-gray">Keep trying, you just need more practice.</dd><br/>
                  <dd className="dib ml0 near-gray">Try to record your calorie with more accuracy,</dd><br/>
                  <dd className="dib ml0 near-gray">and have a steady deficit every day.</dd><br/>
                  <dd className="dib ml0 near-gray">If the above two things you're doing right,</dd><br/>
                  <dd className="dib ml0 near-gray">and you're stuck here for more than 2 weeks, than speed up.</dd><br/>
                </dl>
            </div>
        )
    }
    
}

export default RateGuide;