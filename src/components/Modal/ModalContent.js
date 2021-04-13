import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalNews from './ModalNews';

const ModalContent = ({ showNoResultModal, showNoActExeModal, showNewsModal, onHideModal }) => {

    const { t } = useTranslation();

    return (

        showNoResultModal ?

            <div className="modalClass">
                <div className="pa2 pv3 center w5">
                    <article className="ba pv1 br2 b--light-silver shadow-1 bg-white">
                        <div className="ph3 tc">
                            <div id="colorDiv" className="br2 bg-orange">
                                <h3 >
                                    {t('modal.noResult')}
                                </h3>
                            </div>
                            <p id="description">
                                {t('modal.noResultContent')}
                            </p>
                            <div className="relative pb3">
                                <input
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value={t('modal.button')}
                                    onClick={() => { onHideModal("showNoResultModal") }}
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </div>


            :

            showNoActExeModal ?

                <div className="modalClass">
                    <div className="pa2 pv3 center w5">
                        <article className="ba pv1 br2 b--light-silver shadow-1 bg-white">
                            <div className="ph3 tc">
                                <div id="colorDiv" className="br2 bg-orange">
                                    <h3 >
                                        {t('modal.noActExe')}
                                    </h3>
                                </div>
                                <p id="description">
                                    {t('modal.noActExeContent')}
                                </p>
                                <div className="relative pb3">
                                    <input
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit"
                                        value={t('modal.button')}
                                        onClick={() => { onHideModal("showNoActExeModal") }}
                                    />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                :

                showNewsModal ?

                    <div className="modalClass">
                        <div className="pa2 pv3 center w5">
                            <article className="ba pv1 br2 b--light-silver shadow-1 bg-white">
                                <div className="ph3 tc">
                                    <div id="colorDiv" className="br2 bg-orange">
                                        <h3 >
                                            News
                                        </h3>
                                    </div>
                                    <p id="description">
                                        <ModalNews/>
                                    </p>
                                    <div className="relative pb3">
                                        <input
                                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                            type="submit"
                                            value={t('modal.button')}
                                            onClick={() => { onHideModal("showNewsModal") }}
                                        />
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    :

                    null

    )
}

export default ModalContent;