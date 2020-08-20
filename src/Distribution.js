import React from 'react';

const Distribution = ({ Pitem, Pprotein, Poil, Pactivity, Pexercise, PdailyCalorie, PdailyCarbon }) => {
    let amountA, amountE;
// show activity and exercise here, turn number to string
    if(Pactivity[Pitem-1] === '0') {
        amountA = 'Rare';
    }else if (Pactivity[Pitem-1] === '1'){
        amountA = 'Low';
    }else if(Pactivity[Pitem-1] === '2'){
        amountA = 'Medium';
    }else{
        amountA = 'High';
    }  
    
    if(Pexercise[Pitem-1] === '0') {
        amountE = 'Rare';
    }else if (Pexercise[Pitem-1] === '1'){
        amountE = 'Low';
    }else if(Pexercise[Pitem-1] === '2'){
        amountE = 'Medium';
    }else{
        amountE = 'High';
    }
    
    return (    
        <div>
            <h3 className="">Day {Pitem}</h3>
            <div>Pactivity: {Pactivity}</div>
            <div>Pexercise: {Pexercise}</div>
            <h4>{amountA} activity, {amountE} exercise.</h4>
                <div className="">
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b">Protein:</dt>
                        <dd className="dib ml1 near-gray">{Pprotein} g</dd>
                    </dl>
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b">Oil:</dt>
                        <dd className="dib ml1 near-gray">{Poil} g</dd>
                    </dl>
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b">Carbohydrate:</dt>
                        <dd className="dib ml1 near-gray">{PdailyCarbon[Pitem-1]} g</dd>
                    </dl>
                    <dl className="f5 lh-title mv2">
                        <dt className="dib b">Total calorie: </dt>
                        <dd className="dib ml1 near-gray">{PdailyCalorie[Pitem-1]} Kcal</dd>
                    </dl>   
                </div>   
                {/* <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="next page"
                    />
                </div>     */}
        </div>
    )
}

export default Distribution;