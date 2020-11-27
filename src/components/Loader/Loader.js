import React from 'react';
import { useLoading, Audio } from '@agney/react-loading';


const Loader = () => {
    // loading icon type: Audio
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Audio height="10%"/>,
      });

    return (
        <div className="flex justify-center items-center vh-75" {...containerProps}>
            {indicatorEl} 
        </div>
    )
}

export default Loader;