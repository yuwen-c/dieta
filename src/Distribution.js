import React from 'react';

const Distribution = ({ item, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
    let amountA, amountE;
// show activity and exercise here, turn number to string
    if(activity[item-1] === '0') {
        amountA = 'Rare';
    }else if (activity[item-1] === '1'){
        amountA = 'Low';
    }else if(activity[item-1] === '2'){
        amountA = 'Medium';
    }else{
        amountA = 'High';
    }  
    
    if(exercise[item-1] === '0') {
        amountE = 'Rare';
    }else if (exercise[item-1] === '1'){
        amountE = 'Low';
    }else if(exercise[item-1] === '2'){
        amountE = 'Medium';
    }else{
        amountE = 'High';
    }
    
    return (    
        <div>
            <h3 className="">Day {item}</h3>
            <h4>{amountA} activity, {amountE} exercise.</h4>
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
                <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="next page"
                    />
                </div>    
        </div>
    )
}

export default Distribution;