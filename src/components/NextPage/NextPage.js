import React from 'react';

const NextPage = ({onRouteChange, onCheckBeforeNextPage}) => {
    return(
        <div className="ma3">
            <input 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="next page"
            onClick={onCheckBeforeNextPage}
            />
        </div>
    )
}

export default NextPage;