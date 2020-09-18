import React from 'react';
import NextPage from '../../NextPage/NextPage';
import ModifyOptions from '../ModifyOptions/ModifyOptions';

const NextMove = ({onModifyClick, modifySpeedUp, modifySlowDown, onModifyDeficit, onRouteChange}) => {
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
                  onClick={()=> {onRouteChange('activity')}}
                  />
                  <small id="name-desc" className="f6 black-60 db mb2">Maintain the current deficit.</small>
                </div>
                <div className="pv2">
                  <input 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Speed Up"
                  onClick={onModifyClick}
                  />
                  <small id="name-desc" className="f6 black-60 db mb2">Enlarge calorie deficit, eat less.</small>
                </div>
                <ModifyOptions
                  modifySpeedUp={modifySpeedUp}
                  onModifyDeficit={onModifyDeficit}
                />
                <div className="pv2">
                  <input 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Slow Down"
                  onClick={onModifyClick}
                  />
                  <small id="name-desc" className="f6 black-60 db mb2">Minimize calorie deficit, eat more.</small>
                </div>
                <ModifyOptions
                  modifySlowDown={modifySlowDown}
                  onModifyDeficit={onModifyDeficit}
                />
            </div>           
            <NextPage
            onRouteChange={()=> {onRouteChange('activity')}}
            />
          </fieldset>    
          </div>
    )
}

export default NextMove;