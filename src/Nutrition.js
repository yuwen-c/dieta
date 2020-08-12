import React from 'react';
import Distribution from './Distribution';

const Nutrition = () => {
    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">Marina, your daily recommended intakes this week are:</legend>
                <Distribution/>
            </fieldset>

        </div>
    )
}

export default Nutrition;