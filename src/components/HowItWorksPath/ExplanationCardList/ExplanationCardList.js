import React, { useEffect, useState } from 'react';
import ExplanationCard from '../ExplanationCard/ExplanationCard';
// import { howItWorks, howToUse} from './explanation';
import './ExplanationCardList.css';
import { useTranslation } from 'react-i18next';



const ExplanationCardList = ( ) => {
    const { i18n } = useTranslation();
    const [workingCards, setWorkingCards] = useState([]);
    const [usingCards, setUsingCards] = useState([]); // add empty [] so that the cards.lenth in if statement works
    // useState has one parameter - initialState
    // it returns 2 things, the current state, and a function that updates it

    useEffect(()=> {
        fetch(`/dieta/cardsData/howItWorks/${i18n.language}.json`)
        .then(response => response.json())
        .then(result => setWorkingCards(result));
    }, [i18n.language])

    useEffect(() => {
        fetch(`/dieta/cardsData/howToUse/${i18n.language}.json`)
        .then(response => response.json())
        .then(result => setUsingCards(result))
    }, [i18n.language])

    if(workingCards.length === 0 || usingCards.length === 0){
        return <p>loading</p>
    }
    else{
        return(
            <div className="">
                <div className="flex flex-wrap" id="yellow"> 
                {/* // JSX外面也要包<div></div> */}
                {
                    workingCards.map((item, index) => {
                        return(
                            <ExplanationCard
                            key={item.title}
                            title={item.title} 
                            description={item.description}                         
                            />                
                        )
                    })
                }         
                </div>  
                <div className="flex flex-wrap" id="blue">        
                {
                    usingCards.map((item, index) => {
                        return(
                            <ExplanationCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            />
                        )
                    })
                }
                </div>          
            </div>
        ) 
    }
}

export default ExplanationCardList;


// {console.log("render", workingCards)}
// {console.log("render 2", usingCards)}  