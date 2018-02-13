# viscaWrapper

viscaWrapper 是基於 xapiwrapper 的函式庫，提供各個學習服務傳送 xapi Statement 的方法，每個方法只需要帶入必要的參數值就可送出 Statement。除此之外，為了簡化傳送 Statement 的過程，在傳送 Statement 之前，會逐一檢查各項參數值是否符合規定之型態，確保送出的資料其格式之正確性。

[使用手冊請參考此](https://wiki.visualcatch.org/tc/viscawrapper.html)。

viscaWrapper provides the methods of sending xapi statement for each learning service. As long as each method is set by the necessary parameter values, you can send the statement. In addition, in order to simplify the process of sending statement, it performs type checking on the passed arguments before the statement is sent. So we can ensure the statement we sent is correct.

[Document refer to here](https://wiki.visualcatch.org/en/viscawrapper.html).

## 引用

### 開發者安裝步驟

請先修改 `src/viscaWrapper.js` 中的 Endpoint 資訊。

```
var vEndpoint = '<ENDPOINT>';
```

接著執行下列指令：

```
$npm i
$gulp script
```

### 自動編譯
若您於開發時有自動編譯之需求可使用此指令。
```
$gulp watch
```

## 使用方法

在 HTML 中需要引用下列的檔案，確認引用的 js 檔已下載到電腦中，並調整 script 標籤中引用檔案的位置。

```
<script src="xapiwrapper.min.js"></script>
<script src="viscaWrapper.min.js"></script>
```

### 基本模板

最簡單且可運行的 HTML，帳號及密碼請登入 VisCa 在 API 帳戶管理中取得。可參考 `template.html` 範例。

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="dist/xapiwrapper.min.js"></script>
    <script src="viscaWrapper.js"></script>

    <script type="text/javascript">
        visca.init('帳號','密碼');

        // 由此開始撰寫程式

    </script>
  </head>
  <body>
  </body>
</html>
```
注意：請避免使用 visca 作為變數名稱，要使用 viscaWrapper 中的各項函式皆必須使用此模組名稱呼叫函式。

## License
Copyright ©2018 III Advanced Intelligence Learning Technology Center

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.