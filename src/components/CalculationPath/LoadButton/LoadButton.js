import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadButton = ({name, onLoadActExe}) => {
    const { t } = useTranslation();

    return(
        <div className="ma3">
            <input 
            className="b pv2 input-reset ba b--black bg-white grow pointer f5 dib" 
            type="submit" value={t('loadButton')}
            name={name}
            onClick={onLoadActExe}
            />
        </div>
    )
}

export default LoadButton;