import React from 'react';

const NextPage = ({onRouteChange}) => {
    return(
        <div className="pv2">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="next page"
            onClick={onRouteChange}
            />
        </div>
    )
}

export default NextPage;