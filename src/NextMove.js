import React from 'react';
import NextPage from './NextPage';

const NextMove = () => {
    return(
        <div>
              <fieldset id="" className="bn">
                <legend className="fw7 f4 pv3">Based on these factors, choose your next move: </legend>      
                <div className="">
                    <dl className="f5 lh-title mv2">
                      {/* <dt className="dib b pb1"> 0.5% - 1%:</dt><br/> */}
                      <dd className="dib ml0 near-gray">Is the weight loosing rate normal?</dd><br/>
                      <dd className="dib ml0 near-gray">In the past of three weeks, do you keep losing your weight?</dd><br/>
                      <dd className="dib ml0 near-gray">Do you feel tired?</dd><br/>
                      <dd className="dib ml0 near-gray">Will you expect more stress (from work, live...)next week?</dd><br/>
                    </dl>


                    <div className="pv2">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Maintain Current Rate"
                        //onClick={onBMRCalculate}
                        />
                    </div>

                    <div className="pv2">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Speed Up"
                        //onClick={onBMRCalculate}
                    />
                    </div>

                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="300" value="300" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="300" className="lh-copy">-100 Kcal</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="400" value="400" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="400" className="lh-copy">-200 Kcal</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="500" value="500" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="500" className="lh-copy">-300 Kcal</label>
                    </div>

                    <div className="pv2">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Slow Down"
                        //onClick={onBMRCalculate}
                        />
                    </div>

                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="300" value="300" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="300" className="lh-copy">+100 Kcal</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="400" value="400" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="400" className="lh-copy">+200 Kcal</label>
                    </div>
                    <div className="flex items-center mb2">
                      <input 
                      className="mr2" type="radio" id="500" value="500" name="deficit"
                    //   onClick={onSendOption}
                      />
                      <label htmlFor="500" className="lh-copy">+300 Kcal</label>
                    </div>

                </div>           
                <NextPage
                // onRouteChange={()=> {onRouteChange('exercise')}}
                />
            </fieldset>    
        </div>
    )
}

export default NextMove;