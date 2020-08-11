import React from 'react';
import Options from './Options';
import LoadButton from './LoadButton';

const Activity = () => {
    const weekArr = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return(
        <div>
            <fieldset id="" className="bn">
              <legend className="fw7 f4 pb3">choose your amount of activity this week</legend>      
              <LoadButton/>
                <div className="">
                    <dl className="f6 lh-title mv2">
                      <dt className="dib b">Low:</dt>
                      <dd className="dib ml0 mid-gray">6000 steps, or 30mins mounting/climbing stairs, or 1hr walking, house cleaning/biking.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                      <dt className="dib b">Middle:</dt>
                      <dd className="dib ml0 mid-gray">10000 steps, or 1hr mounting/climbing stairs, or 2hr walking, house cleaning/biking.</dd>
                    </dl>
                    <dl className="f6 lh-title mv2">
                      <dt className="dib b">High:</dt>
                      <dd className="dib ml0 mid-gray">20000 steps, or 2hr mounting/climbing stairs, or 3hr walking, house cleaning/biking.</dd>
                    </dl>
                </div>

            <div>
                {
                    weekArr.map(item => {
                        return(
                            <div key={item}>
                                <h4>{item}</h4>
                                <Options
                                    Pname={`activity-${item}`}
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


export default Activity;