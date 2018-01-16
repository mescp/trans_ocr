## 截屏翻译工具

> 通过 nodejs 整合 第三方工具实现的截屏翻译命令行程序

### 依赖

1. gnome-screenshot

> ubuntu 内置截屏工具

2. baidu-aip-sdk

> `npm install baidu-aip-sdk`

3. translate-shell

> https://github.com/soimort/translate-shell

### 使用

1. 重命名 config_example.json 为 config.json

  > `修改配置节中的baidu的api参数`
  
    "baidu": {
        "id": "文本识别应用id",
        "ak": "文本识别应用API_KEY",
        "sk": "文本识别应用SECRET_KEY"
    },
   
   
2. `node run.js`
