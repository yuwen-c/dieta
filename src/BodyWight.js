import React from 'react';


const BodyWeight = ({PonInputChange, PonSubmitCalculate, Pbmr}) => {
    return(
      <div className="pa4 black-80">
        <div className="measure">
          <label htmlFor="name" className="f6 b db mb2">Body Weight 
            <span className="normal black-60"> kg</span>
          </label>
          <input id="weight" 
          className="input-reset ba b--black-20 pa2 mb2 db w-30" 
          type="text" 
          aria-describedby="name-desc"
          onChange={PonInputChange}
          ></input>
          <small id="name-desc" className="f6 black-60 db mb2">enter your body weight here</small>
        </div>

      <div className="">
        <input 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="submit"
        onClick={PonSubmitCalculate}
        />
      </div>
      <p>Your BMR (Basal Metabolic Rate) is <span>{Pbmr}</span> Kcal.</p>

 
      </div>
    )
}

export default BodyWeight;