import React from 'react';
import Distribution from './Distribution';

const Nutrition = ({ onRouteChange, deficit, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
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
                <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign out"
                    onClick={() => {onRouteChange('signin')}}
                    />
                </div> 
            </fieldset>
        </div>
    )
}

export default Nutrition;