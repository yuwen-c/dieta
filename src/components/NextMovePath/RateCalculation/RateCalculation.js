import React, { Component } from 'react';
import NextMove from '../NextMove/NextMove';
import NextPage from '../../NextPage/NextPage';
import RateGuide from '../RateGuide/RateGuide';
import { withTranslation} from 'react-i18next';

class RateCalculation extends Component{
    constructor(){
        super();
        this.state = {
            showGuide: false, // show guide card after calculating rate
            weightThisWeek: 0,
            weightLastWeek: 0,
            rate: 0, // % of losing rate
            speed:'', // 'normal', 'fast', 'slow'
            error: ''
        }
    }
    onThisWeekInput = (event) => {
        this.setState({weightThisWeek: parseFloat(event.target.value)})
    }

    onLastWeekInput = (event) => {
        this.setState({weightLastWeek: parseFloat(event.target.value)})
    }

    rateCalculation = () => {
        this.setState({error: ''})
        const {weightThisWeek, weightLastWeek} = this.state;

        if(!isNaN(weightThisWeek) && !isNaN(weightLastWeek)){
            if(weightThisWeek <=1000 && weightThisWeek >= 40 && weightLastWeek <=1000 &&  weightLastWeek >= 40 ){
                const rateNum = ((weightThisWeek - weightLastWeek)/ weightLastWeek) ;
                let speed = rateNum <= -0.005 && rateNum > -0.015 ?  //-0.5% ~ -1.5%
                  'normal'
                  :
                  rateNum <= -0.015 ?  // -1.5% or more 
                   'fast'
                   :    // - less than 0.5%
                    'slow'

                this.setState({
                    rate: Math.round( ( rateNum + Number.EPSILON ) * 10000 ) / 100,
                    showGuide: true,
                    speed: speed
                });        
            }
            else{
                this.setState({error: 'Invalid number'})
            }
        }
        else{
            this.setState({error: 'Invalid number'})
        }
        // window.scrollTo(0, 300); //scroll page the guide part
    }


    render(){
        const {showGuide, speed} = this.state;
        return(
            <div className="flex flex-column items-center">
            {console.log(this.state.speed)}
                <div className="w5 w-70-ns">
                    <div id="cardDiv" className="pa3 ">
                        <article className="ba pv1 br2 b--light-silver shadow-1">     
                            <div className="ph3">
                                <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                                    <h3>
                                    {this.props.t('rate.title')}
                                    </h3>      
                                </div>  
                                <div className="fw7 f8 ">{this.props.t('rate.calculate')}</div> 
                                <div className="measure">
                                    <label htmlFor="name" className="f6 b db mb2">{this.props.t('rate.aveThis')} 
                                      <span className="normal black-60"> kg</span>
                                    </label>
                                    <input id="weightThisWeek" 
                                    className="input-reset ba b--black-60 pa2 mb2 db w3" 
                                    type="text" 
                                    aria-describedby="name-desc"
                                    onChange={this.onThisWeekInput}
                                    />
                                </div>
                                <div className="measure">
                                    <label htmlFor="name" className="f6 b db mb2">{this.props.t('rate.aveLast')} 
                                      <span className="normal black-60"> kg</span>
                                    </label>
                                    <input id="weightLastWeek" 
                                    className="input-reset ba b--black-60 pa2 mb2 db w3" 
                                    type="text" 
                                    aria-describedby="name-desc"
                                    onChange={this.onLastWeekInput}
                                    />
                                </div>
            
                                <div className="pb3 flex flex-wrap">
                                    <input 
                                    className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer b f6 dib" 
                                    type="submit" 
                                    value={this.props.t('rate.submit')}
                                    onClick={this.rateCalculation}
                                    />
                                    <span
                                    className="f5 link dark-pink dib ml2 pt3"
                                    >{this.state.error}</span> 
                                </div>
            
                                <p><span className="pl1">{this.state.rate}</span> {this.props.t('rate.percentage')}</p>
            
                            </div>
                        </article>   
                    </div>
                    <RateGuide
                    showGuide={showGuide}
                    speed={speed}
                    />
                </div>
                <div id="cardDiv" className="pa3 w5 w-70-ns">
                    <article className="ba pv1 br2 b--light-silver shadow-1">
                        <div className="ph3">
                            <NextMove
                            maintainRate = {this.props.maintainRate}
                            deficit = {this.props.deficit}
                            onModifySpeed = {this.props.onModifySpeed}
                            modifySpeedUp = {this.props.modifySpeedUp}
                            modifySlowDown = {this.props.modifySlowDown}
                            onModifyDeficit = {this.props.onModifyDeficit}
                            // onRouteChange = {this.props.onRouteChange}
                            />
                        </div>
                    </article>   
                </div>
                <NextPage
                nextPageMessage={this.props.nextPageMessage}
                onCheckBeforeNextPage={() => {this.props.onCheckBeforeNextPage('activity')}}
                // onRouteChange={()=> {this.props.onRouteChange('activity')}}
                />
            </div>
        )
    }
}

// export default RateCalculation;
export default withTranslation()(RateCalculation);
