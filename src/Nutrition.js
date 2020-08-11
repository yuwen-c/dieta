import React from 'react';
import Distribution from './Distribution';

const Nutrition = () => {
    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pb3">Marina, your daily recommended intake this week is:</legend>
                <Distribution/>
            </fieldset>

        </div>
    )
}

export default Nutrition;