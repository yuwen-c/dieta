import React from 'react';
import { useTranslation } from 'react-i18next';

const ModalNews = () => {
    const { t } = useTranslation();

    return (
        <ul className="list tl ph2">
            <li>
                <span className="dib pr1 v-top">#</span>
                <span className="dib w-90 v-top">{t('footer.news1')}</span>
            </li>
            <li>
                <span className="dib pr1 v-top">#</span>
                <span className="dib w-90 v-top">{t('footer.news2')}</span>
            </li>
        </ul>
    )
}

export default ModalNews;