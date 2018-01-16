#!/usr/bin/env node
const readline = require('readline');
const ocr = require('./lib/baidu_ocr');
const screenshot = require('./lib/screenshot');
const trans = require('./lib/trans');

const information =
    `------------------------------
命令行翻译工具
  输入单词后回车活取翻译信息
  直接回车屏幕取次翻译`;

process.title = '命令行翻译工具';
console.info(information);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:
        `------------------------------
:`
});
rl.prompt();

rl.on('line', (line) => {
    if (line.length > 0) {
        trans(`"${line.trim()}"`).then((str => {
            console.log(str.trim());
            rl.prompt();
        }));
    }
    else {
        console.log('鼠标框选文字区域...');
        screenshot().then((file) => {
            return ocr(file)
        }).then((txts) => {
            const txtstr = txts.toString();
            return trans(`"${txtstr}"`)
        }).then((tran) => {
            console.log('......');
            console.log(tran.trim());
            rl.prompt();
        }).catch(function (e) {
            console.log(e.message);
            rl.prompt();
        });
    }
}).on('close', () => {
    process.exit(0);
});


