import React from 'react';

const Options = ({Pname, PponSendOption, optionCheckedState}) => {
  // The for attribute of <label> must be equal to the id attribute of the related element 
  // console.log("optionCheckedState[1~4] in Options", optionCheckedState[0], optionCheckedState[1], optionCheckedState[2], optionCheckedState[3]); 

  return(
        <div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-rare`} value="0" name={Pname}
              onChange={PponSendOption} // use onChange istead of onClick to meet the checked's need
              checked={optionCheckedState[0]}
              />
              <label htmlFor={`${Pname}-rare`} className="lh-copy">Rare</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-low`} value="1" name={Pname}
              onChange={PponSendOption}
              checked={optionCheckedState[1]}
              />
              <label htmlFor={`${Pname}-low`} className="lh-copy">Low</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-medium`} value="2" name={Pname}
              onChange={PponSendOption}
              checked={optionCheckedState[2]}
              />
              <label htmlFor={`${Pname}-medium`} className="lh-copy">Medium</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id={`${Pname}-high`} value="3" name={Pname}
              onChange={PponSendOption}
              checked={optionCheckedState[3]}
              />
              <label htmlFor={`${Pname}-high`} className="lh-copy">High</label>
            </div>
        </div>
    )
}

export default Options; 