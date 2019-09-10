let SensitiveWordFilter = require("./index.js");
let filter = global.filter = new SensitiveWordFilter(require("./sensitive_word.json"));

function replaceSensitiveWord(txt){
    return filter.replaceSensitiveWord(txt);
}
module.exports.replaceSensitiveWord = replaceSensitiveWord;

function isContaintSensitiveWord(txt){
    return filter.isContaintSensitiveWord(txt);
}
module.exports.isContaintSensitiveWord = isContaintSensitiveWord;