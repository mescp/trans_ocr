var AipOcrClient = require("baidu-aip-sdk").ocr;
var config = require('../config');

// 设置APPID/AK/SK
var APP_ID = config.baidu.id;
var API_KEY = config.baidu.ak;
var SECRET_KEY = config.baidu.sk;

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

/**
 * 文字识别
 * @param image
 * @returns {Promise<void>}
 */
module.exports = async (image) => {
    var retTxt = await client.generalBasic(image);

    retTxt = retTxt.words_result.map((word) => {
        return `${word.words}\n`;
    });

    return retTxt;
};

