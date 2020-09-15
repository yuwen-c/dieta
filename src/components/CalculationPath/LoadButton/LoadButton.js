import React from 'react';


const LoadButton = ({onLoadOptions}) => {
    return(
        <div className="pb1">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" value="Load setting of last week"
            onClick={onLoadOptions}
            />
        </div>
    )
}

export default LoadButton;