
var child_process = require('child_process');
var config = require('../config');

const util = require('util');
const exec = util.promisify(child_process.exec);

module.exports = async (data) => {
    const exeCommand = `${config.trans.tool} :zh ${data}`;
    const {stdout, stderr} = await exec(exeCommand);
    return stdout;
};

