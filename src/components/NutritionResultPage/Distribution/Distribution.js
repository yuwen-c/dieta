import React from 'react';
import './Distribution.css';

const Distribution = ({ item, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
    let amountA, amountE;
// show activity and exercise here, turn number to string
    if(activity[item-1] === 0) {
        amountA = 'Rare';
    }else if (activity[item-1] === 1){
        amountA = 'Low';
    }else if(activity[item-1] === 2){
        amountA = 'Medium';
    }else{
        amountA = 'High';
    }  
    
    if(exercise[item-1] === 0) {
        amountE = 'Rare';
    }else if (exercise[item-1] === 1){
        amountE = 'Low';
    }else if(exercise[item-1] === 2){
        amountE = 'Medium';
    }else{
        amountE = 'High';
    }
    
    return (    
        <div id="cardDiv" className="pa2 dib w5 center">
            <article className="ba pv1 br2 b--light-silver shadow-1">
                <div className="ph3">
                    <div className="bg-green br2">
                        <h3 >
                            Day {item}
                        </h3>      
                    </div>
                    <h4 className="">{amountA} activity, {amountE} exercise.</h4>
                    <div className="">
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">Protein:</dt>
                            <dd className="dib ml1 near-gray">{protein} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">Oil:</dt>
                            <dd className="dib ml1 near-gray">{oil} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">Carbohydrate:</dt>
                            <dd className="dib ml1 near-gray">{dailyCarbon[item-1]} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">Total calorie: </dt>
                            <dd className="dib ml1 near-gray">{dailyCalorie[item-1]} Kcal</dd>
                        </dl>   
                    </div>      
                </div>
            </article>           
        </div>
    )
}



export default Distribution;