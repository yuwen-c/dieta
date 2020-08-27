import React from 'react';
import NextPage from './NextPage';
import ModifyOptions from './ModifyOptions';

const NextMove = ({onModifyClick, modifyState}) => {
    return(
        <div>
          <fieldset id="" className="bn">
            <legend className="fw7 f4 pv3">Based on these factors, choose your next move: </legend>      
            <div className="">
                <dl className="f5 lh-title mv2">
                  <dd className="dib ml0 near-gray">Is the weight loosing rate normal?</dd><br/>
                  <dd className="dib ml0 near-gray">In the past of three weeks, do you keep losing your weight?</dd><br/>
                  <dd className="dib ml0 near-gray">Do you feel tired?</dd><br/>
                  <dd className="dib ml0 near-gray">Will you expect more stress (from work, live...)next week?</dd><br/>
                </dl>
                <div className="pv2">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Maintain Current Rate"
                    // onClick={onBMRCalculate}
                    />
                </div>
                <div className="pv2">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Speed Up"
                    onClick={onModifyClick}
                />
                </div>
                <div className="pv2">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Slow Down"
                    onClick={onModifyClick}
                    />
                </div>
                <ModifyOptions
                  modifyState={modifyState}
                />
            </div>           
            <NextPage
            // onRouteChange={()=> {onRouteChange('exercise')}}
            />
          </fieldset>    
          </div>
    )
}

export default NextMove;