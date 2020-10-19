import React from 'react';
import ModifyOptions from '../ModifyOptions/ModifyOptions';

const NextMove = ({maintainRate, deficit, onModifySpeed, modifySpeedUp, modifySlowDown, onModifyDeficit, onRouteChange}) => {
    return(  
        <div className="">
            <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                <h3>
                Consider these factors:
                </h3>      
            </div>                
            <div className="">
                <div className="b lh-copy pb2">
                    - Is the rate normal?<br/>
                    - Keep losing weight for 3 weeks?<br/>
                    - Feel tired?<br/>
                    - Expect more stress next week?
                </div>
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Maintain Current Rate"
                    name="maintain"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                      Maintain the current deficit.
                    </small>
                    {maintainRate ? 
                    <p>Maintain deficit: <span>{deficit}</span> Kcal.</p>
                    : 
                    null}
                </div>
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Speed Up, eat less"
                    name="speedUp"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                        Enlarge calorie deficit, eat less.
                    </small>
                </div>
                <ModifyOptions
                modifySpeedUp={modifySpeedUp}
                onModifyDeficit={onModifyDeficit}
                />
                <div className="pv1">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Slow Down, eat more"
                    name="slowDown"
                    onClick={onModifySpeed}
                    />
                    <small id="name-desc" className="f6 black-60 db mb2">
                      Minimize calorie deficit, eat more.
                    </small>
                </div>
                <ModifyOptions
                modifySlowDown={modifySlowDown}
                onModifyDeficit={onModifyDeficit}
                />
            </div>           
        </div>     
    )
}

export default NextMove;