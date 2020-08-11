import React from 'react';

const Distribution = () => {
    return (
        <div>
            <p className="fw7 f4">Monday</p>
                <div className="">
                    <dl class="f6 lh-title mv2">
                        <dt class="dib b">Protein:</dt>
                        <dd class="dib ml0 mid-gray">110g</dd>
                    </dl>
                    <dl class="f6 lh-title mv2">
                        <dt class="dib b">Oil:</dt>
                        <dd class="dib ml0 mid-gray">55g</dd>
                    </dl>
                    <dl class="f6 lh-title mv2">
                        <dt class="dib b">Carbonhydrate:</dt>
                        <dd class="dib ml0 mid-gray">100g</dd>
                    </dl>
                    <dl class="f6 lh-title mv2">
                        <dt class="dib b">Total calorie: </dt>
                        <dd class="dib ml0 mid-gray">1200 Kcal</dd>
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