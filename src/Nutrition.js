import React from 'react';
import Distribution from './Distribution';

const Nutrition = () => {
    const dayArr = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt3">Marina, your daily recommended intakes are:</legend>
                <p className="pt0 pb2">Deficit : 300 Kcal</p>
                <Distribution/>
            </fieldset>

        </div>
    )
}

export default Nutrition;