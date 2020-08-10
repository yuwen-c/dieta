import React from 'react';

const Options = ({Pname}) => {
    return(
        <div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id="Low" value="Low" name={Pname}/>
              <label htmlFor="spacejam" className="lh-copy">Low</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id="Middle" value="Middle" name={Pname}/>
              <label htmlFor="airbud" className="lh-copy">Middle</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="radio" id="High" value="High" name={Pname}/>
              <label htmlFor="hocuspocus" className="lh-copy">High</label>
            </div>
        </div>
    )
}

export default Options; 