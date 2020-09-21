import React from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';
import LevelTable from '../LevelTable/LevelTable';
import {exerciseTableData} from '../LevelTable/TableData';

const Exercise = ({onRouteChange, onActExeAmount, calculateNutrition, onLoadActExe, optionCheckedState}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt2">Choose your amount of exercise this week</legend>
                <LevelTable
                    data={exerciseTableData}
                />                
                <LoadButton
                    name='exercise'
                    onLoadActExe={onLoadActExe}
                />
                <div className="flex flex-wrap">
                    {
                        dayArr.map((item, index) => {
                            return (
                                <div key={item}>
                                    <Options 
                                        style={{'backgroundColor' : '#96CCFF'}}
                                        item={item}
                                        name={`exercise${item}`}
                                        onActExeAmount={onActExeAmount}
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

