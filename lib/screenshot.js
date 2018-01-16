var child_process = require('child_process');
var fs = require('fs');
var config = require('../config');
var exeCommand = `${config.screenshot.tool} ${config.screenshot.tmpFile}`;

const util = require('util');
const exec = util.promisify(child_process.exec);
const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);
const exists = util.promisify(fs.exists);

module.exports = async () => {
    if (await exists(config.screenshot.tmpFile))
        await  unlink(config.screenshot.tmpFile);

    const {stdout, stderr} = await exec(exeCommand);

    if (await exists(config.screenshot.tmpFile)) {
        const fileData = await  readFile(config.screenshot.tmpFile);
        return fileData.toString("base64");
    } else {
        throw  new Error('取消文字识别！');
    }
};