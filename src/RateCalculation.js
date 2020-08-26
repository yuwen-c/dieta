import React from 'react';
import NextPage from './NextPage';

const RateCalculation = () => {
    return(
        <div className="pa4 black-80">
            <div className="measure pv2">
                <label htmlFor="name" className="f6 b db mb2">Average weight This Week 
                  <span className="normal black-60"> kg</span>
                </label>
                <input id="weight" 
                className="input-reset ba b--black-60 pa2 mb2 db w-30" 
                type="text" 
                aria-describedby="name-desc"
                // onChange={onInputChange}
                />
              {/* <small id="name-desc" className="f6 black-60 db mb2">enter your body weight here</small> */}
            </div>

            <div className="measure pv2">
                <label htmlFor="name" className="f6 b db mb2">Average weight Last Week
                  <span className="normal black-60"> kg</span>
                </label>
                <input id="weight" 
                className="input-reset ba b--black-60 pa2 mb2 db w-30" 
                type="text" 
                aria-describedby="name-desc"
                // onChange={onInputChange}
                />
            </div>

            <div className="">
              <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="submit"
            //   onClick={onBMRCalculate}
              />
            </div>
            <p>Your're lose <span>XX</span> % weight</p>

            <NextPage
            //   onRouteChange={()=> {onRouteChange('activity')}}
            />
      </div>
    )
}

export default RateCalculation;

// //

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