import React from 'react';
import './Distribution.css';
import { useTranslation } from 'react-i18next';

const Distribution = ({ item, protein, oil, activity, exercise, dailyCalorie, dailyCarbon }) => {
    const {t, i18n} = useTranslation();

    const en = ["Rare", "Low", "Medium", "High"];
    const zh = ["極少", "低", "中", "高"]
    let amountA, amountE;

    const lng = i18n.language.includes('zh') ? 'zh' :
        i18n.language.includes('en') ? 'en' : 'en';

    // show activity and exercise on the page, turn number to string
    const toAmountStr = (type, language) => {
        let amountStr;
        let lngStr;
        if(language === 'en'){
            lngStr = en
        }
        else if(language === 'zh'){
            lngStr = zh
        }
        amountStr = lngStr[type[item-1]]

        return amountStr;
    }

    amountA = toAmountStr(activity, lng);
    amountE = toAmountStr(exercise, lng);
    
    return (    
        <div id="cardDiv" className="pa2 dib w5 center">
            <article className="ba pv1 br2 b--light-silver bg-white shadow-1">
                <div className="ph3">
                    <div className="bg-green br2">
                        <h3>
                            {t('nutrition.day', {item: item})}
                        </h3>      
                    </div>
                    <h4 className="mb3">{t('nutrition.amount', {act: amountA, exe: amountE})}</h4>
                    <div className="">
                        <dl className="f5 lh-title mv1">
                            <dt className="dib b">{t('nutrition.protein')}:</dt>
                            <dd className="dib ml1 near-gray">{protein} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv1">
                            <dt className="dib b">{t('nutrition.oil')}:</dt>
                            <dd className="dib ml1 near-gray">{oil} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv1">
                            <dt className="dib b">{t('nutrition.carbohydrate')}:</dt>
                            <dd className={`dib ml1 ${dailyCarbon[item-1] >0 ? "near-gray" : "red" }`}>{dailyCarbon[item-1]} g</dd>
                        </dl>
                        <dl className="f5 lh-title mv1">
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


