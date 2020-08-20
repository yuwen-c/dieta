import React from 'react';
import Options from './Options';
import LoadButton from './LoadButton';

const Exercise = ({onRouteChange, PonSendOption, PcalculateNutrition, onLoadOptions, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; // change to int?
    // const weekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">choose your amount of exercise this week</legend>
                <LoadButton
                    onLoadOptions={() => {onLoadOptions("Exercise")}}
                />
                <div className="">
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Low:</dt>
                        <dd className="dib ml0 mid-gray">less than 12 sets of workout, or less than 0.5hr cardio.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Middle:</dt>
                        <dd className="dib ml0 mid-gray">15-20 sets workout, or 1hr cardio.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">High:</dt>
                        <dd className="dib ml0 mid-gray">25 sets workout, or more than 1.5hr cardio.</dd>
                    </dl>
                </div>

                <div>
                    {
                        dayArr.map((item, index) => {
                            return (
                                <div key={item}>
                                    <h4>Day {item}</h4>
                                    <Options 
                                        Pname={`exercise${item}`}
                                        PponSendOption={PonSendOption}
                                        optionCheckedState={optionCheckedState[index]}
                                    />
                                    optionCheckedState: {optionCheckedState[index].toString()}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="next page"
                    // call two functions in onClick
                    onClick={()=> {onRouteChange('nutrition'); PcalculateNutrition()} }
                    />
                </div>
            </fieldset>
        </div>
    )
}


export default Exercise;