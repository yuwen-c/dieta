import React from 'react';
import { useTranslation } from 'react-i18next';

const RateGuide = ({showGuide, speed}) => {
    const { t } = useTranslation();

    if(!showGuide){
        return null
    }
    else{
    return(
        <div id="cardDiv" className="pa3">
            <article className="ba pv1 br2 b--light-silver bg-white  shadow-1">     
                <div className="ph3">
                    <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                        <h3>
                            {t(`guide.rate.${speed}`)}
                        </h3>      
                    </div>  
                    <div className=" b lh-copy pb2">
                        {t(`guide.result.${speed}`)}
                    </div>
                    <p className="mb2"> 
                        {t(`guide.suggestion1.${speed}`)}
                    </p>
                    <p>
                        {t(`guide.suggestion2.${speed}`)}
                    </p>
                </div>
            </article>   
        </div>
    )}
}

export default RateGuide;