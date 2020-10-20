import React from 'react';
import CalorieDeficit from '../CalorieDeficit/CalorieDeficit';
import NextPage from '../../NextPage/NextPage';
import './Weight.css'

const Weight = ({weight, deficit, onWeightChange, onRouteChange, onDeficitChange, weightMessage, nextPageMessage, onCheckBeforeNextPage}) => {
    return(
        <div className="flex flex-column items-center">
            <div id="cardDiv" className="pa3 w5 w-70-ns">
                <article className="ba pv1 br2 b--light-silver shadow-1">     
                    <div className="ph3">
                        <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                            <h3>
                            Start to calculate! 
                            </h3>      
                        </div>   
                        <div className="fw7 f8 pb3">Enter your body weight:</div> 
                        <div className="measure">
                            <label htmlFor="name" className="f6 b db mb2">Body Weight 
                            <span className="normal black-60"> kg</span>
                            </label>
                            <div className="flex flex-wrap">
                                <input id="weight" 
                                className="input-reset ba b--black-60 pa2 db w3" 
                                type="text" 
                                aria-describedby="name-desc"
                                // value={weight}
                                onChange={onWeightChange}
                                />
                                <span
                                className="f5 link dark-pink dib ml2 pt3"
                                >{weightMessage}</span>                                
                                </div>
                            <small id="name-desc" className="f6 black-60 db mb2">e.g. 78</small>
                        </div>

                        {/* <div className="pb3">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="submit"
                            onClick={onBMRCalculate}
                            />
                        </div> */}
                        {/* <p>Your BMR is <span>{bmr}</span> Kcal.</p> */}
                    </div>
                </article>   
            </div>
            <div id="cardDiv" className="pa3 w5 w-70-ns">
                <article className="ba pv1 br2 b--light-silver shadow-1">
                    <div className="ph3">
                        <CalorieDeficit
                        weight={weight}
                        deficit={deficit}
                        onDeficitChange={onDeficitChange}
                        />
                    </div>
                </article>   
            </div>
            <NextPage className=""
            // onRouteChange={()=> {onCheckWeight(); onRouteChange('activity'); onDeleteBMR()}}
            onCheckBeforeNextPage={() => onCheckBeforeNextPage('activity')}
            nextPageMessage={nextPageMessage}
            />
        </div>
    )
}

export default Weight;