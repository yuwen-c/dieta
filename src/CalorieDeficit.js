import React from 'react';

const CalorieDeficit = ({PponSendOption}) => {
    return (
        <div>
            <fieldset id="" className="bn">
                <div className="bn">
                    <legend className="fw7 f4 pb3">your calorie deficit per day this week</legend>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="300" value="300" name="deficit"
                      onClick={PponSendOption}
                      />
                      <label htmlFor="300" className="lh-copy">300</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="400" value="400" name="deficit"
                      onClick={PponSendOption}
                      />
                      <label htmlFor="400" className="lh-copy">400</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="500" value="500" name="deficit"
                      onClick={PponSendOption}
                      />
                      <label htmlFor="500" className="lh-copy">500</label>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}

export default CalorieDeficit;