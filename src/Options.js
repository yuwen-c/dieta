import React from 'react';

const Options = ({Pname}) => {
  // have to fix: correspond label to options
  // The for attribute of <label> must be equal to the id attribute of the related element 
    return(
        <div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id={`${Pname}-rare`} value="rare" name={Pname}/>
              <label htmlFor={`${Pname}-rare`} className="lh-copy">Rare</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id={`${Pname}-low`} value="Low" name={Pname}/>
              <label htmlFor={`${Pname}-low`} className="lh-copy">Low</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id={`${Pname}-medium`} value="Medium" name={Pname}/>
              <label htmlFor={`${Pname}-medium`} className="lh-copy">Medium</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id={`${Pname}-high`} value="High" name={Pname}/>
              <label htmlFor={`${Pname}-high`} className="lh-copy">High</label>
            </div>
        </div>
    )
}

export default Options; 