# Dieta - 減重熱量計算系統
### 🔆 [實際操作網站](https://yuwen-dieta.netlify.app/)
### [readme in English](https://github.com/yuwen-c/dieta/blob/master/README.md)
### [後端server的github](https://github.com/yuwen-c/dieta-api)


## 動機及目的
- 想減重😁。採用的方式是：讓「攝取」的熱量比「消耗」的熱量少。
- 減重期間共約15週，每週都要重複計算熱量、做調整，我希望有一個系統，不只幫我算，也記得上週的數據，方便我調整，讓我減重更輕鬆。

## 路徑簡介、使用方式介紹

<div align="center">
  <img src="example/dietaChart_trans_200percent_100dpi.png" alt="Dieta Route Chart" width="600px" />
  <br>
</div>

- project主要有3條路徑/ 功能：
1. 第一週，開始減脂：使用者輸入體重、預計熱量赤字，並且根據指示，選擇活動量、運動量等級，得到營養素及熱量的計算結果。
2. 第二週以後：輸入本週、上週平均體重，獲得建議，來決定下一週的調整方向(少吃或多吃)，然後一樣填入活動量、運動量，得到熱量計算結果。
3. 此外，隨時可以到「結果查詢」叫出上次的計算結果。


## 成果？？？？？
- 我把這個project推薦給我的教練，他也鼓勵他的學生使用，目前已有xx個使用者。

## 特點

### 整體架構
✨ 前端網站使用**React.js**\
－語法類似Javascript，利用多個元件組合而成，元件各自獨立且可重複使用。\
✨ 後端server利用**node.js**, **express.js**\
－使用Javascript語言，效能強大，可快速建造一個server。
✨ 前後端以**RestfulAPI**連接。\
－提高可讀性、除錯效率，分離每個端點，可彈性組合成多種邏輯。\
✨ 使用者資料儲存於**PostgreSQL**資料庫。\
✨ 資料庫與server以**knex**相接。

### 響應式網站
✨ 手機、桌機體驗良好的前端網站。\
✨ 利用```react-super-responsive-table```達成響應式表格。\
✨ 利用```react-bootstrap```達成響應式導覽列。\
✨ 利用Tachyons設定達成：針對不同螢幕大小，顯示不同樣式的設計。

### 安全性
✨ 使用者密碼以**Bcrypt**加密。\
✨ 使用者密碼，與姓名等資料分開存放在不同table，減少資料外洩的機率。

### 多國語言
✨ 支援中文/英文，採用```react-i18next```及```hooks```\

### 部署
✨ 前端網站部署到Netlify。\
✨ 後端網站部署到Heroku。

## 詳細作法
### 前端
### 後端



