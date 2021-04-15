import React from 'react';
import { useTranslation } from 'react-i18next';

const ModalNews = () => {
    const { t } = useTranslation();
    
    return (
        <ul className="tl">
            <li>{t('footer.news1')}</li>
            <li>{t('footer.news2')}</li>
        </ul>
    )
}

export default ModalNews;