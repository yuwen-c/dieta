import React from 'react';
import NextPage from './NextPage';

const RateGuide = () => {
    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">Weight loss rate</legend>      
                <div className="">
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b pb1"> 0.5% - 1%:</dt><br/>
                      <dd className="dib ml0 near-gray">Normal rate, keep going.</dd><br/>
                      <dd className="dib ml0 near-gray">If you have been losing weight with this rate over 3 - 4 weeks,</dd><br/>
                      <dd className="dib ml0 near-gray">a 2 - 7 day "break" are suggested.</dd><br/>
                      <dd className="dib ml0 near-gray">add 200 - 400 Kcal per day during break.</dd><br/>

                    </dl>
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b pb1"> 1.5% - 2% or even more:</dt><br/>
                      <dd className="dib ml0 near-gray">A little bit too fast, keep watching it.</dd><br/>
                      <dd className="dib ml0 near-gray">If you have been losing weight with this rate over 2 - 3 weeks,</dd><br/>
                      <dd className="dib ml0 near-gray">highly recommend you to take a week "break".</dd><br/>
                      <dd className="dib ml0 near-gray">add 300 - 500 Kcal per day during break.</dd><br/>


                    </dl>
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b pb1"> less than 0.5%:</dt><br/>
                      <dd className="dib ml0 near-gray">Keep trying, you just need more practice.</dd><br/>
                      <dd className="dib ml0 near-gray">Try to record your calorie with more accuracy,</dd><br/>
                      <dd className="dib ml0 near-gray">and have a steady deficit every day.</dd><br/>
                    </dl>
                </div>
                
                <NextPage
                // onRouteChange={()=> {onRouteChange('exercise')}}
                />
            </fieldset>            
        </div>
    )
}

export default RateGuide;