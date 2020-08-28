import React from 'react';

const ModifyOptions = ({modifySpeedUp, modifySlowDown}) => {
    return(
      <div>
      {
        modifySpeedUp && !modifySlowDown 
        
        ? 
        <div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="-100" value="-100" name="speedup"
            //   onClick={onSendOption}
              />
              <label htmlFor="-100" className="lh-copy">-100 Kcal</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="-200" value="-200" name="speedup"
            //   onClick={onSendOption}
              />
              <label htmlFor="-200" className="lh-copy">-200 Kcal</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="-300" value="-300" name="speedup"
            //   onClick={onSendOption}
              />
              <label htmlFor="-300" className="lh-copy">-300 Kcal</label>
            </div>
        </div>

        :

          !modifySpeedUp && modifySlowDown 
        
          ?

        <div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="+100" value="+100" name="slowdown"
                          //   onClick={onSendOption}
              />
              <label htmlFor="+100" className="lh-copy">+100 Kcal</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="+200" value="+200" name="slowdown"
                          //   onClick={onSendOption}
              />
              <label htmlFor="+200" className="lh-copy">+200 Kcal</label>
            </div>
            <div className="flex items-center mb2">
              <input 
              className="mr2" type="radio" id="+300" value="+300" name="slowdown"
            //   onClick={onSendOption}
              />
              <label htmlFor="+300" className="lh-copy">+300 Kcal</label>
            </div>
        </div>
          :
        null
      }
      </div>
    )
}

export default ModifyOptions;