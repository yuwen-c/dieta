import React from 'react';

const Distribution = () => {
    return (
        <div>
            <h4 className="">Monday</h4>
                <div className="">
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Protein:</dt>
                        <dd className="dib ml0 mid-gray">110g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Oil:</dt>
                        <dd className="dib ml0 mid-gray">55g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Carbonhydrate:</dt>
                        <dd className="dib ml0 mid-gray">100g</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Total calorie: </dt>
                        <dd className="dib ml0 mid-gray">1200 Kcal</dd>
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