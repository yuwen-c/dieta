import React from 'react';
import Options from './Options';
import LoadButton from './LoadButton';
import NextPage from './NextPage';


// onLoadOptions的參數竟然不用在最底層的onClick帶入！！
const Activity = ({onRouteChange, onSendOption, onLoadOptions, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return( 
        <div> 
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">choose your amount of activity this week</legend>      
                <LoadButton
                onLoadOptions={onLoadOptions}
                />
                <div className="">
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b">Low:</dt>
                      <dd className="dib ml0 near-gray">6000 steps, or 30mins mounting/climbing stairs, or 1hr walking, house cleaning/biking.</dd>
                    </dl>
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b">Middle:</dt>
                      <dd className="dib ml0 near-gray">10000 steps, or 1hr mounting/climbing stairs, or 2hr walking, house cleaning/biking.</dd>
                    </dl>
                    <dl className="f5 lh-title mv2">
                      <dt className="dib b">High:</dt>
                      <dd className="dib ml0 near-gray">20000 steps, or 2hr mounting/climbing stairs, or 3hr walking, house cleaning/biking.</dd>
                    </dl>
                </div>
{/* 在map裡面如果用optionState加[0]: TypeError: Cannot read property '1' of undefined (OPTIONS) */} 
{/* 在options裡面加index, 與map裡面加index，只能擇一，否則出錯*/}
                <div>
                     {
                        dayArr.map((item, index) => {
                            return( 
                                 <div key={item}> 
                                    <h4>Day {item}</h4>
                                    <Options
                                        name={`activity${item}`}
                                        onSendOption={onSendOption}
                                        optionCheckedState={optionCheckedState[index]}
                                    />
                                    {/* <div>optionCheckedState:  {optionCheckedState[index].toString()}</div> */}
                                 </div> 
                             )
                        })
                    }   
                </div>
                <NextPage
                onRouteChange={()=> {onRouteChange('exercise')}}
                />
            </fieldset>
        </div>
    )
}


export default Activity;