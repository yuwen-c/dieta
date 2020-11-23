import React from 'react';
import './Distribution.css';
import { useTranslation } from 'react-i18next';

const Distribution = ({ item, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
    const {t, i18n} = useTranslation();

    let amountA, amountE;

    // show activity and exercise here, turn number to string
    const toAmountStr = (type) => {
        let amount;
        
        switch (type[item-1]){
            case 0:
                amount = "Rare";
                break;
            case 1:
                amount = "Low";
                break;
            case 2:
                amount = "Medium";
                break;
            case 3:
                amount = "High";
                break;
            default:
        }
        return amount;
    }

    amountA = toAmountStr(activity);
    amountE = toAmountStr(exercise);
    
    return (    
        <div id="cardDiv" className="pa2 dib w5 center">
            <article className="ba pv1 br2 b--light-silver shadow-1">
                <div className="ph3">
                    <div className="bg-green br2">
                        <h3 >
                            {t('nutrition.day', {item: item})}
                        </h3>      
                    </div>
                    <h4 className="">{amountA} activity, {amountE} exercise.</h4>
                    <div className="">
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">{t('nutrition.protein')}:</dt>
                            <dd className="dib ml1 near-gray">{protein} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">{t('nutrition.oil')}:</dt>
                            <dd className="dib ml1 near-gray">{oil} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">{t('nutrition.carbohydrate')}:</dt>
                            <dd className="dib ml1 near-gray">{dailyCarbon[item-1]} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv2">
                            <dt className="dib b">{t('nutrition.totalCalorie')}: </dt>
                            <dd className="dib ml1 near-gray">{dailyCalorie[item-1]} Kcal</dd>
                        </dl>   
                    </div>      
                </div>
            </article>           
        </div>
    )
}



export default Distribution;    


