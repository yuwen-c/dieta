import React from 'react';


const LoadButton = ({PonLoadOptions}) => {
    return(
        <div className="pb1">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" value="Load setting of last week"
            onClick={PonLoadOptions}
            />
        </div>
    )
}

export default LoadButton;