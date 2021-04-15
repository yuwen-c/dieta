import React from 'react';
import { useTranslation } from 'react-i18next';

const ModalNews = () => {
    const { t } = useTranslation();
    const newsCount = 2; // how many news there. have to change when adding news
    const newsArray = Array.from(Array(newsCount).keys()) // create an array with length of newsCount

    return (
        <ul className="list tl ph2">
        {
            newsArray.map((item, index) => {
                return(
                    <div
                    key={item}>
                        <li>
                            <span className="dib pr1 v-top">#</span>
                            <span className="dib w-90 v-top">{t(`footer.news${index+1}`)}</span>
                        </li>
                    </div>
                )
            })
        }
        </ul>
    )
}

export default ModalNews;