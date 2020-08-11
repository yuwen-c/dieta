import React from 'react';
import Options from './Options';
import LoadButton from './LoadButton';

const Exercise = () => {
    const weekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pb3">choose your amount of exercise this week</legend>
                <LoadButton/>
                <div className="">
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Low:</dt>
                        <dd className="dib ml0 mid-gray">less than 12 sets of workout, or less than 0.5hr cardio.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">Middle:</dt>
                        <dd className="dib ml0 mid-gray">15-20 sets workout, or 1hr cardio.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                        <dt className="dib b">High:</dt>
                        <dd className="dib ml0 mid-gray">25 sets workout, or more than 1.5hr cardio.</dd>
                    </dl>
                </div>

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
                <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="next page"
                    />
                </div>
            </fieldset>
        </div>
    )
}


export default Exercise;