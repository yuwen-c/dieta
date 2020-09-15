import React from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';

const Exercise = ({onRouteChange, onSendOption, calculateNutrition, onLoadOptions, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">choose your amount of exercise this week</legend>
                <LoadButton
                    onLoadOptions={onLoadOptions}
                />
                <div className="">
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b pb1">Low:</dt><br/>
                        <dd className="dib ml0 near-gray">less than 12 sets workout</dd><br/>
                        <dd className="dib ml0 near-gray">less than 0.5hr cardio</dd><br/>
                        <dd className="f6 dib ml0 mid-gray">(one of these)</dd><br/>
                    </dl>
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b pb1">Middle:</dt><br/>
                        <dd className="dib ml0 near-gray">15-20 sets workout</dd><br/>
                        <dd className="dib ml0 near-gray">1hr cardio.</dd><br/>
                        <dd className="f6 dib ml0 mid-gray">(one of these)</dd><br/>
                    </dl>
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b pb1">High:</dt><br/>
                        <dd className="dib ml0 near-gray">25 sets workout</dd><br/>
                        <dd className="dib ml0 near-gray">more than 1.5hr cardio</dd><br/>
                        <dd className="f6 dib ml0 mid-gray">(one of these)</dd><br/>
                    </dl>
                </div>

                <div>
                    {
                        dayArr.map((item, index) => {
                            return (
                                <div key={item}>
                                    <h4>Day {item}</h4>
                                    <Options 
                                        name={`exercise${item}`}
                                        onSendOption={onSendOption}
                                        optionCheckedState={optionCheckedState[index]}
                                    />
                                    {/* optionCheckedState: {optionCheckedState[index].toString()} */}
                                </div>
                            )
                        })
                    }
                </div>
                <NextPage
                // call two functions in onClick
                onRouteChange={()=> {onRouteChange('result'); calculateNutrition()} }
                />
            </fieldset>
        </div>
    )
}


export default Exercise;