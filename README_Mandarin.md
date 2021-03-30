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

- Dieta 主要有3條路徑/ 功能 (圖中黃色方框)：
1. 第一週，開始減脂：使用者輸入體重、預計熱量赤字，並且根據指示，選擇活動量、運動量等級，得到營養素及熱量的計算結果。
2. 第二週以後：輸入本週、上週平均體重，獲得建議，來決定下一週的調整方向(少吃或多吃)，然後一樣填入活動量、運動量，得到熱量計算結果。
3. 此外，隨時可以到「結果查詢」叫出上次的計算結果。


## 成果？？？？？🚀
- 我把這個project推薦給我的教練，他也鼓勵他的學生使用🥰。
- 上線一個月內達到xx個使用者。

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

## 畫面預覽
- 首次使用，開始計算，輸入體重及預計熱量赤字。
<div align="center">
  <img src="example/Dieta_calculate.png" alt="start diet" width="300px" />
  <br>
</div>

- 根據表格資料，選擇當週的活動量等級。
<div align="center">
  <img src="example/Dieta_activity.png" alt="start diet" width="300px" />
  <br>
</div>

- 電腦版的計算結果畫面，顯示使用者名稱、營養素、熱量。
<div align="center">
  <img src="example/Dieta_screenshot.png" alt="Dieta example" width="600px" />
  <br>
</div>

- 進入第二週，輸入本週、上週平均體重，會根據減重速率，**動態顯示建議**，使用者再決定下週調整方向。
<div align="center">
  <img src="example/Dieta_nextmove.png" alt="start diet" width="300px" />
  <br>
</div>

## 前端詳細作法 及 儲存的 ```state``` 種類


### 註冊或登入
- 在```SignIn```和```SignUp``` component分別儲存使用者輸入的資訊：信箱、名字、密碼。


### guest user登入 （畫圖）


### 儲存、計算使用者輸入資料
- ```user obj```- 姓名、信箱、體重、熱量赤字。


### Route，及進到下一頁的檢查
- 使用者是否sign in: ```isSignIn```(預設```false```)
- ```route```預設在```"home"```


### 為了讓活動量、運動量的選取顯示在畫面上
- 使用者填入的活動量、運動量的無、低、中、高等級，一週七天，存成array，例如
```
activity: [0,1,2,0,0,1,3];
exercise: [0,1,0,2,0,2,0];
```
- 為了讓同一畫面中，7天共28個選項，正確顯示是否有被勾選，另外存了：
```checkedActivity```和```checkedExercise```，兩者都預設為：
```
const initialchecked = 
[[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false],[false, false, false, false],[false, false, false, false],
[false, false, false, false]];
```

### 計算結果
- 將使用者的營養素、熱量計算後，存在state，並顯示在畫面上：
```
protein : 0,
oil : 0,
dailyCalorie : [], // 總共7天的卡路里
dailyCarbon : [], // 總共7天的碳水化合物數量
```

### 動態顯示調整熱量選項
- 熱量調整，可以選擇「維持不變」，「加快」，「放慢」，分別為：
```
maintainRate: false,
modifySpeedUp: false,
modifySlowDown: false, 
modifyDeficit: 0,
```


### 錯誤訊息div, modal
- 遇到「未完成第一次計算」的使用者想下載紀錄，跳出錯誤宣告:「沒有計算結果」或「沒有活動量、運動量紀錄」
```
showNoResultModal: false,
showNoActExeModal: false
```
- 另外，在操作過程中，未填寫資料就點選下一頁，會出現提示訊息：

### 在使用者登出後，必須將state還原成初始狀態。
- 設定```initialState```，包含上述各state。
- constructor裡面以```JSON.parse(JSON.stringify(initialState))```將state設為```initialState```，並且避免pass by reference。





### 後端詳細作法



