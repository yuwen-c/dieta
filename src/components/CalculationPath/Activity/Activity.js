import React from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';
import LevelTable from '../LevelTable/LevelTable';
import {activityTableData} from '../LevelTable/TableData';

// onLoadOptions的參數竟然不用在最底層的onClick帶入！！
const Activity = ({onRouteChange, onSendOption, onLoadOptions, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return( 
        <div> 
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt2">Choose your amount of activity per day this week</legend>      
                <LevelTable
                    data={activityTableData}
                />
                {/* [{},{},{}] */}
                <LoadButton
                    onLoadOptions={onLoadOptions}
                />
{/* 在map裡面如果用optionState加[0]: TypeError: Cannot read property '1' of undefined (OPTIONS) */} 
{/* 在options裡面加index, 與map裡面加index，只能擇一，否則出錯*/}
                <div className="flex flex-wrap">
                    {
                        dayArr.map((item, index) => {
                            return( 
                                <div key={item}> 
                                    <Options
                                        style={{'background-color': '#A463F2'}}
                                        item={item}
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

