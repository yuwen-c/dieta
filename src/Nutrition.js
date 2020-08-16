import React from 'react';
import Distribution from './Distribution';

const Nutrition = ({ Pweight, Pdeficit, Pprotein, Poil, Pactivity, Pexercise, PdailyCalorie, PdailyCarbon }) => {
    const dayArr = [1, 2, 3, 4, 5, 6, 7];
    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt3">Marina, your daily recommended intakes are:</legend>
                <p className="pt0 pb2">Deficit : {Pdeficit} Kcal</p>
                {
                    dayArr.map(item => {
                        return (
                            <Distribution
                            key = {item}
                            Pitem = {item}
                            Pweight = {Pweight}
                            Pdeficit = {Pdeficit}
                            Pprotein = {Pprotein}
                            Poil = {Poil}
                            Pactivity = {Pactivity}
                            Pexercise = {Pexercise}
                            PdailyCalorie = {PdailyCalorie}
                            PdailyCarbon = {PdailyCarbon}
                            />    
                        )
                  })




                }
            </fieldset>

        </div>
    )
}

export default Nutrition;