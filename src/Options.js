import React from 'react';

const Options = () => {
    return(
        <div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>
              <label htmlFor="spacejam" className="lh-copy">Low</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="airbud" value="airbud"/>
              <label htmlFor="airbud" className="lh-copy">Middle</label>
            </div>
            <div className="flex items-center mb2">
              <input className="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>
              <label htmlFor="hocuspocus" className="lh-copy">High</label>
            </div>
        </div>
    )
}

export default Options; 