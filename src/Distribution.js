import React from 'react';

const Distribution = ({ Pitem, Pweight, Pdeficit, Pprotein, Poil, Pactivity, Pexercise, PdailyCalorie, PdailyCarbon }) => {
    return (
        <div>
            <h3 className="">Day {Pitem}</h3>
            {/* show activity and exercise here, turn number to string */}
            <h4> {Pactivity[Pitem-1]} activity, {Pexercise[Pitem-1]} exercise.</h4>
                <div className="">
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Protein:</dt>
                        <dd className="dib ml0 mid-gray">{Pprotein} g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Oil:</dt>
                        <dd className="dib ml0 mid-gray">{Poil} g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Carbohydrate:</dt>
                        <dd className="dib ml0 mid-gray">{PdailyCarbon[Pitem-1]} g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Total calorie: </dt>
                        <dd className="dib ml0 mid-gray">{PdailyCalorie[Pitem-1]} Kcal</dd>
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