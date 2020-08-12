import React from 'react';
import Options from './Options';
import LoadButton from './LoadButton';

const Exercise = ({PonRouteChange, PonSendOption}) => {
    const dayArr = ['Day_1', 'Day_2', 'Day_3', 'Day_4', 'Day_5', 'Day_6', 'Day_7'];
    // const weekArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div>
            <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">choose your amount of exercise this week</legend>
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
                        dayArr.map(item => {
                            return (
                                <div key={item}>
                                    <h4>{item}</h4>
                                    <Options 
                                        Pname={`exercise${item}`}
                                        PponSendOption={PonSendOption}
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
                    onClick={()=> {PonRouteChange('nutrition')}}
                    />
                </div>
            </fieldset>
        </div>
    )
}


export default Exercise;