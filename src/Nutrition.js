import React from 'react';
import Distribution from './Distribution';

const Nutrition = ({ deficit, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
    const dayArr = [1, 2, 3, 4, 5, 6, 7];


    return(
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pt3">Marina, your daily recommended intakes are:</legend>
                <p className="pt0 pb2">Deficit : {deficit} Kcal</p>
                {
                    dayArr.map(item => {
                        return (
                            <Distribution
                            key = {item}
                            item = {item}
                            protein = {protein}
                            oil = {oil}
                            activity = {activity}
                            exercise = {exercise}
                            dailyCalorie = {dailyCalorie}
                            dailyCarbon = {dailyCarbon}
                            />    
                        )
                  })




                }
            </fieldset>

        </div>
    )
}

export default Nutrition;