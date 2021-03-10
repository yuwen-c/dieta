import React, {useRef} from 'react';
import photo_calculate from '../../photo/Dieta_calculate.png';
import photo_activity from '../../photo/Dieta_activity.png';
import photo_nutrition from '../../photo/Dieta_nutrition.png';
import photo_nextmove from '../../photo/Dieta_nextmove.png';
import Emoji from '../Emoji/Emoji';


const GuidePage = () => {
    const firstTime = useRef(null);
    const secondTime = useRef(null);
    const newRound = useRef(null);

    const scrollTo = (ref) => {
        ref.current.scrollIntoView();
    }

    return(
        <article className="pa3 pa5-ns center w-50-l">
            <nav >
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" onClick={() => scrollTo(firstTime)}>第一次使用</a>
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" onClick={() => scrollTo(secondTime)}>減脂進入第二週以上</a>
                <a className="dim dark-blue b f3 f4-ns dib mr3 link" onClick={() => scrollTo(newRound)}>開始新一輪減脂</a>
            </nav>
            <header className="pv4">
                <h4 className="f3 fw7 tracked lh-title mt0 mb3">
                    <Emoji emoji="🎯" label="bullseye"/>  不用註冊即可試用！</h4>
                <h4 className="f3 fw6 lh-title mt0">首頁Dieta→試用(可體驗部分功能)，喜歡再註冊。</h4>
                <h4 className="f3 fw6 lh-title mt0">或是直接前往選單→註冊頁面填寫資料。</h4>
            </header>
            <section ref={firstTime} className="mb5">
            <h4 className="f3 fw6 lh-title mt0">第一次使用 <Emoji emoji="☝" label="index pointing up"/>：</h4>
            <ul>
                <li>選單→目錄→開始減脂</li>
                <li>輸入體重，選擇熱量赤字。</li>
            </ul>
            <img src={photo_calculate} className="w-100 f5 measure" alt="Dieta_calculate"/>


            <ul>
                <li>輸入本週的活動量與運動量等級。低/中/高等級可參考畫面上方的表格。</li>
            </ul>
            <img src={photo_activity} className="w-100 f5 measure" alt="Dieta_activity"/>
            
            <ul>
                <li>最後算出本週的營養素及熱量建議。</li>
            </ul>
            <img src={photo_nutrition} className="w-100 f5 measure" alt="Dieta_nutrition"/>

            <p className="b"> <Emoji emoji="👑" label="crown"/>小技巧：隨時可從 選單→目錄→上次計算結果 叫出紀錄<Emoji emoji="🤙" label="call me hand"/></p>
            </section>

            <section ref={secondTime} className="mb5">
            <h4 className="f3 fw6 lh-title mt0">減脂進入第二週以上<Emoji emoji="✌" label="victory hand"/>：</h4>
            <ul>
                <li>此功能僅供完成註冊，且已完成「第一次計算」的使用者。</li>
                <li>減脂進行一週後，前往選單→目錄→減脂期間。</li>
                <li>填入本週，及上週的體重平均，送出後即可獲得減脂建議。</li>
                <li>根據建議，及評估自身狀況，決定下週的減脂速度是否要調整。熱量赤字增加，表示減脂速度加快，減少，表示放慢減脂。</li>
            </ul>
            <p className="b">這個步驟是根據「首次計算」的熱量結果來進行調整，才符合結果導向的意義。</p>
            <img src={photo_nextmove} className="w-100 f5 measure" alt="Dieta_nextmove"/>
            
            <ul>
                <li>接著像上週一樣，選擇活動量及運動量等級。</li>
            </ul>
            <p className="b"><Emoji emoji="👑" label="crown"/>小技巧：可直接點選下載上週紀錄按鈕，載入後也可再修改。</p>

            <ul>
                <li>計算出下週的營養素及熱量建議。</li>
            </ul>
            </section>

            <section ref={newRound} className="mb5">
            <h4 className="f3 fw6 lh-title mt0">開始新一輪減脂<Emoji emoji="🤟" label="love-you gesture"/>：</h4>
            <ul>
                <li>請從第一步驟：選單→目錄→開始減脂計算重新開始。</li>
                <li>進入第二週時再到選單→目錄→減脂期間。</li>
            </ul>
            </section>
        </article>
    )
}

export default GuidePage;