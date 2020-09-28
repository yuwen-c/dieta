import React from 'react';
import CalorieDeficit from '../CalorieDeficit/CalorieDeficit';
import NextPage from '../../NextPage/NextPage';
import './Weight.css'

const Weight = ({onWeightChange, onBMRCalculate, bmr, onRouteChange, onDeficitChange}) => {
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
                            <input id="weight" 
                            className="input-reset ba b--black-60 pa2 mb2 db w3" 
                            type="text" 
                            aria-describedby="name-desc"
                            onChange={onWeightChange}
                            />
                            <small id="name-desc" className="f6 black-60 db mb2">enter your body weight here</small>
                        </div>

                        <div className="pb3">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="submit"
                            onClick={onBMRCalculate}
                            />
                        </div>
                        <p>Your BMR is <span>{bmr}</span> Kcal.</p>
                    </div>
                </article>   
            </div>
            <div id="cardDiv" className="pa3 w5 w-70-ns">
                <article className="ba pv1 br2 b--light-silver shadow-1">
                    <div className="ph3">
                        <CalorieDeficit
                        onDeficitChange={onDeficitChange}
                        />
                        <NextPage
                        onRouteChange={()=> {onRouteChange('activity')}}
                        />
                    </div>
                </article>   
            </div>
        </div>
    )
}

export default Weight;