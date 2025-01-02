# Lottery

## 基本功能

- [x] 本地持久化儲存
- [x] 獎品獎項配置
- [x] 抽獎名單設置管理
- [x] 播放背景音樂
- [x] Excel表格導入人員名單、抽獎結果使用Excel導出
- [x] 可增加臨時抽獎
- [x] 更換背景圖片

## Build & Deploy

1. Setup

    - Add `homepage` field to `package.json`
    ```json
    "homepage": "https://kittychengyuenpui.github.io"
    ```
    - Install `gh-pages` packages
    ```bash
    npm install gh-pages
    ```
    - Add `deploy` field to `scripts` in `package.json`
    ```json
    "deploy": "gh-pages -b main -d dist"
    ```
    - Setup deployment repository (public)
    ```bash
    git remote set-url origin https://github.com/kittychengyuenpui/kittychengyuenpui.github.io.git
    ```

2. Build (打包)

    ```bash
    npm run build
    ```

3. Deploy to Github page(user page) 
    
    - Create a sub-folder by project `name` in `package.json` in `dist` folder and move all the files in `dist` into the newly-created sub-folder
    - Execute command
    ```bash
    npm run deploy
    ```

## 操作說明

### 步驟

1. 首次進入，沒有數據展示，可以選擇使用默認數據進行使用，查看整體展示效果。推薦導入自己的數據来進行操作。步驟如下：

    a. 人員配置-人員名单-下載模板，下載數據模板並修改填入數據(請注意表頭不可修改)。

    b. 修改好後在同一個頁面點擊‘上傳文件’，上傳修改後的excel表格。

2. 進入獎品配置，修改自己的獎品信息。

    a. 名稱盡量短一點，方便展示；

    b. 是否全員参加意指該項獎項是否從全體人員中抽取（已中獎的依然可以参与）；

    c. 獲獎人數指該獎項要抽取的人數；已獲獎人數不可編輯；
    
    d. 已抽取被選中時指該獎項已使用，取消選擇會重置該獎項，但不會重置已獲獎的人；
    
    e. 圖片是在首頁展示時的獎品圖片（可在圖片列表自己上傳）；
    
    f. 左侧圖標调整獎品顺序用。

完成上面两項已可以正常使用。

### 功能說明

1. 增加臨時抽獎：抽獎頁面的獎項列表有個‘+’号按鈕，點擊可臨時增加抽獎，注意：一次只能增加一項臨時抽獎，新增成功後當前獎項即設置為該臨時獎項，抽取成功後返回正常獎項列表．
2. 音樂与圖片列表，可自己上傳文件進行使用，圖片上傳成功後就可以在獎項配置中進行選擇圖片展示，音樂上傳成功後即加入了播放列表．
3. 音樂播放：使用鼠標左鍵點擊是播放/暫停，使用鼠標右鍵點擊是播放下一首．
4. 界面配置-圖案設置中可使用鼠標點擊自定義配置首頁中的高亮圖案．
5. 若不想在首頁展示獎品列表,將界面配置中的'是否顯示獎項列表'選中．
6. 首頁點擊按鈕時按鈕值不會立即更新，會等動畫结束後才會更新為目標值，属於正常現象．

### 快捷鍵

在抽獎頁面設置了快捷鍵。

| 快捷鍵 | 說明 |
| --- | --- |
| Space | 進入抽獎/开始/抽取幸運兒/繼續 |
| Esc | 取消 |
