import React from 'react';


const LoadButton = ({onLoadActExe}) => {
    return(
        <div className="mv2">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
            type="submit" value="Load setting of last week"
            onClick={onLoadActExe}
            />
        </div>
    )
}

export default LoadButton;