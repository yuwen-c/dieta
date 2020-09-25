import React from 'react';
import NextPage from '../../NextPage/NextPage';
import ModifyOptions from '../ModifyOptions/ModifyOptions';

const NextMove = ({onModifySpeed, modifySpeedUp, modifySlowDown, onModifyDeficit, onRouteChange}) => {
    return(
        <div id="cardDiv" className="pa3 w5">
            <article className="ba pv1 br2 b--light-silver shadow-1">     
                <div className="ph3">
                    <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                        <h3>
                        Consider these factors:
                        </h3>      
                    </div>                
                    <div className="">
                        <div className=" b lh-copy pb2">
                            - Is the rate normal?<br/>
                            - Keep losing weight for 3 weeks?<br/>
                            - Feel tired?<br/>
                            - Expect more stress next week?
                        </div>

                        <div className="">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Maintain Current Rate"
                            onClick={()=> {onRouteChange('activity')}}
                            />
                            <small id="name-desc" className="f6 black-60 db mb2">
                              Maintain the current deficit.
                            </small>
                        </div>

                        <div className="">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Speed Up"
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

                        <div className="">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Slow Down"
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
                    <NextPage
                    onRouteChange={()=> {onRouteChange('activity')}}
                    />
                </div>     
            </article>   
        </div>
    )
}

export default NextMove;