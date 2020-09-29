import React, { Component } from 'react';
import NextMove from '../NextMove/NextMove';
import NextPage from '../../NextPage/NextPage';
import RateGuide from '../RateGuide/RateGuide';
import {RateGuideSuggestions} from '../RateGuide/RateGuideSuggestions';

class RateCalculation extends Component{
    constructor(){
        super();
        this.state = {
            showGuide: false, // show guide card after calculating rate
            weightThisWeek: 0,
            weightLastWeek: 0,
            rate: 0, // % of losing rate
        }
    }
// 如何判斷rate是尚未輸入的0，還是計算結果的0?
    onThisWeekInput = (event) => {
        this.setState({weightThisWeek: event.target.value})
    }

    onLastWeekInput = (event) => {
        this.setState({weightLastWeek: event.target.value})
    }

    rateCalculation = () => {
        const {weightThisWeek, weightLastWeek} = this.state;
        const rate = Math.round((weightThisWeek - weightLastWeek)/ weightLastWeek * 10000)/100
        this.setState({
            rate: rate,
            showGuide: true
        });
        // window.scrollTo(0, 300); //scroll page the guide part
    }



    render(){
        const {rate, showGuide} = this.state;
        const rateNum = rate/100; // convert % -> normal number

        return(
            <div className="flex flex-column items-center">
                <div className="w5 w-70-ns">
                    <div id="cardDiv" className="pa3 ">
                        <article className="ba pv1 br2 b--light-silver shadow-1">     
                            <div className="ph3">
                                <div className="br2" style={{'backgroundColor' : '#96CCFF'}} >
                                    <h3>
                                    What's the next? 
                                    </h3>      
                                </div>  
                                <div className="fw7 f8 ">Calculate your losing rate:</div> 
                                <div className="measure">
                                    <label htmlFor="name" className="f6 b db mb2">Average weight This Week 
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
                                    <label htmlFor="name" className="f6 b db mb2">Average weight Last Week
                                      <span className="normal black-60"> kg</span>
                                    </label>
                                    <input id="weightLastWeek" 
                                    className="input-reset ba b--black-60 pa2 mb2 db w3" 
                                    type="text" 
                                    aria-describedby="name-desc"
                                    onChange={this.onLastWeekInput}
                                    />
                                </div>
            
                                <div className="pb3">
                                  <input 
                                  className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer b f6 dib" 
                                  type="submit" 
                                  value="submit"
                                  onClick={this.rateCalculation}
                                  />
                                </div>
            
                                <p><span className="pl1">{this.state.rate}</span> % weight change.</p>
            
                            </div>
                        </article>   
                    </div>
                    {   //-0.5% ~ -1.5%
                        (rateNum <= -0.005 && rateNum > -0.015) ?
                    
                    <RateGuide
                    showGuide={showGuide}
                    RateGuideSuggestions={RateGuideSuggestions[0]}
                    />
    
                    :
                        rateNum <= -0.015 ?  // -1.5% or more 
                    
                        <RateGuide
                        showGuide={showGuide}
                        RateGuideSuggestions={RateGuideSuggestions[1]}
                        />
    
                        :   // - less than 0.5%
                            
                        <RateGuide
                        showGuide={showGuide}
                        RateGuideSuggestions={RateGuideSuggestions[2]}
                        />
    
                    }
                </div>
                <div id="cardDiv" className="pa3 w5 w-70-ns">
                    <article className="ba pv1 br2 b--light-silver shadow-1">
                        <div className="ph3">
                            <NextMove
                            onModifySpeed = {this.props.onModifySpeed}
                            modifySpeedUp = {this.props.modifySpeedUp}
                            modifySlowDown = {this.props.modifySlowDown}
                            onModifyDeficit = {this.props.onModifyDeficit}
                            onRouteChange = {this.props.onRouteChange}
                            />
                        </div>
                    </article>   
                </div>
                <NextPage
                onRouteChange={()=> {this.props.onRouteChange('activity')}}
                />
            </div>
        )
    }
}

export default RateCalculation;



// 1. 
// 輸入上週體重平均、本週體重平均  ok
// input

// 2. 算出下降%。


// 3. 出現說明: 能否，算出某個數值之後，出現那個說明即可？

// - 0.5%-1%：
// 正常速度，可繼續維持。
// * 若連續三到四週以上了，建議休息 2 至 7 天，
// 熱量提高 200-400 kcal 左右

// - >1.5%-2%：
// 速度稍快，要留意。
// 如果連續兩三週快速下降，建議至少先休息一週，
// 熱量提高 300-500kcal 左右。

// - <0.5%：
// 建議繼續練習精確紀錄、穩定達到赤字。

// 4. 
// 根據以下因素決定下週走向：
// - 目前減重速度是否正常(0.5%~1%)
// - 是否已連續多週下降？
// - 是否已感覺到疲勞？(有：建議放慢)
// - 工作、生活是否會有壓力變大的情況？？(有：建議放慢)

// - 維持
// => 跳至原本營養分佈

// - 加速
// 選擇100.200.300kcal

// - 放慢
// 選擇100.200.300kcal

// 5. 
// 減脂2-4週後，可以間歇加入休息日，可以讓減脂更有效果。
// 吃回赤字

// 選擇天數 禮拜幾

// 6. 營養頁面