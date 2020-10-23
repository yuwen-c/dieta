import React from 'react';

const ModalContent = ({showNoResultModal, showNoActExeModal, onHideModal}) => {
    
    return(

        showNoResultModal ? 

        <div className="modalClass">
            <div className="pa2 pv3 center w5">
                <article className="ba pv1 br2 b--light-silver shadow-1 bg-white">
                    <div className="ph3 tc">
                        <div id="colorDiv" className="br2 bg-orange">
                            <h3 >
                            No record.
                            </h3>      
                        </div>
                        <p id="description">
                          Let's get start from calculation.
                        </p>  
                        <div className="relative pb3">
                          <input 
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                          type="submit" 
                          value="Got it!"
                          onClick={() => {onHideModal("showNoResultModal")}}
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
                            No record.
                            </h3>      
                        </div>
                        <p id="description">
                          Please choose options.
                        </p>  
                        <div className="relative pb3">
                          <input 
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                          type="submit" 
                          value="Got it!"
                          onClick={() => {onHideModal("showNoActExeModal")}}
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