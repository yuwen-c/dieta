import React, { useEffect, useState } from 'react';
import Options from '../Options/Options';
import LoadButton from '../LoadButton/LoadButton';
import NextPage from '../../NextPage/NextPage';
import LevelTable from '../LevelTable/LevelTable';
import {useTranslation} from 'react-i18next';

const Exercise = ({onRouteChange, calculateNutrition, onActExeAmount, onLoadActExe, optionCheckedState, onCheckBeforeNextPage, nextPageMessage}) => {
    const dayArr = ['1', '2', '3', '4', '5', '6', '7']; 
    const { t, i18n} = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://yuwengithub.github.io/dieta/exerciseTableData/${i18n.language}.json`)
        .then(response => response.json())
        .then(result => setData(result))
    }, [i18n.language]);

    if(data.length === 0){
        return(<p>loading</p>)
    }
    else{
        return (
            <div className="pa3 flex flex-column items-center">
                <legend className="fw7 f4 pv3 tc">{t('exercise.title')}</legend>
                <LevelTable
                    data={data}
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
                onCheckBeforeNextPage = {()=> {onCheckBeforeNextPage('result')}}
                />
            </div>
        )
    }
}

export default Exercise;

