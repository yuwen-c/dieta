import React from 'react';
import Options from './Options';

const Exercise = () => {
    const weekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div>
            <div className="pa3 pa5-ns">
                <h4 className="f6 fw6">amount of exercise:</h4>
                <dl className="f6 lh-title mv2">
                    <dt className="dib b">Low:</dt>
                    <dd className="dib ml0 gray">less than 12 sets of workout, or less than 0.5hr cardio.</dd>
                </dl>
                <dl className="f6 lh-title mv2">
                    <dt className="dib b">Middle:</dt>
                    <dd className="dib ml0 gray">15-20 sets workout, or 1hr cardio.</dd>
                </dl>
                <dl className="f6 lh-title mv2">
                    <dt className="dib b">High:</dt>
                    <dd className="dib ml0 gray">25 sets workout, or more than 1.5hr cardio.</dd>
                </dl>
            </div>

            <fieldset id="favorite_movies" className="bn">
                <legend className="fw7 f4 ">choose your amount of exercise this week</legend>
                <div>
                    {
                        weekArr.map(item => {
                            return (
                                <div key={item}>
                                    <h4>{item}</h4>
                                    <Options 
                                        Pname={`exercise-${item}`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </fieldset>

        </div>
    )
}


export default Exercise;