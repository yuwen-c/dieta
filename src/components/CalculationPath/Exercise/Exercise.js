import React from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';
import LevelTable from '../LevelTable/LevelTable';
import {exerciseTableData} from '../LevelTable/TableData';

const Exercise = ({onRouteChange, onSendOption, calculateNutrition, onLoadOptions, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt2">Choose your amount of exercise this week</legend>
                <LevelTable
                    data={exerciseTableData}
                />                
                <LoadButton
                    onLoadOptions={onLoadOptions}
                />
                <div>
                    {
                        dayArr.map((item, index) => {
                            return (
                                <div key={item}>
                                    <Options 
                                        style={{'background-color' : '#96CCFF'}}
                                        item={item}
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

