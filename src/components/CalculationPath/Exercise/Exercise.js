import React from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';
import LevelTable from '../LevelTable/LevelTable';
import {exerciseTableData} from '../LevelTable/TableData';

const Exercise = ({onRouteChange, onActExeAmount, calculateNutrition, onLoadActExe, optionCheckedState, onDeleteActExeOption, onCheckBeforeNextPage, nextPageMessage}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    return (
        <div className="pa3 flex flex-column items-center">
                <legend className="fw7 f4 pv3 tc">Amount of exercise/ day</legend>
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
                                    <Options 
                                        key={item}
                                        style={{'backgroundColor' : '#96CCFF'}}
                                        item={item}
                                        name={`exercise${item}`}
                                        onActExeAmount={onActExeAmount}
                                        optionCheckedState={optionCheckedState[index]}
                                    />
                            )
                        })
                    }
                </div>
                <NextPage
                // call two functions in onClick
                // onRouteChange={()=> {onRouteChange('result'); onDeleteActExeOption('exercise'); calculateNutrition()} }
                nextPageMessage = {nextPageMessage}
                onCheckBeforeNextPage = {()=> {onCheckBeforeNextPage('result'); calculateNutrition()}}
                />
        </div>
    )
}

export default Exercise;

