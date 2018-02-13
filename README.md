# viscaWrapper

viscaWrapper provides the methods of sending xapi statement for each learning service. As long as each method is set by the necessary parameter values, you can send the statement. In addition, in order to simplify the process of sending statement, it performs type checking on the passed arguments before the statement is sent. So we can ensure the statement we sent is correct.

* [Document refer to here](https://wiki.visualcatch.org/en/viscawrapper.html).
* [中文說明請參考此](https://github.com/AILTC/viscaWrapper/wiki/%E4%B8%AD%E6%96%87%E7%89%88%E7%B0%A1%E4%BB%8B)。

## Include

### Installation

Please set the Endpoint information in `src / viscaWrapper.js` first.

```
var vEndpoint = '<ENDPOINT>';
```

Then execute the following instructions：

```
$npm i
$gulp script
```

### Automatic Construction
Use this command if you have the need to automatic construction during development.
```
$gulp watch
```

## How to Use

You need to include the HTML below inside the head section. Confirm the js files have been downloaded to your computer, and modify the file path.

```
<script src="xapiwrapper.min.js"></script>
<script src="viscaWrapper.min.js"></script>
```

### Basic template

Copy the HTML below to begin working with viscaWrapper. You can sign in VisCa to get the account and password in API Account Management. Refer to the `template.html` example.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="dist/xapiwrapper.min.js"></script>
    <script src="viscaWrapper.js"></script>

    <script type="text/javascript">
        visca.init('account','password');
        visca.setGlobalPlatform('your platform URL');

        // Your code here.

    </script>
  </head>
  <body>
  </body>
</html>
```
Attention: Avoid using `visca` as variable name. To call the function, it must use this name.

## License
Copyright ©2018 III Advanced Intelligence Learning Technology Center

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

```
http://www.apache.org/licenses/LICENSE-2.0
```

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.