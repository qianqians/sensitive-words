module.exports = require("./src/SensitiveWordFilter.js")

let SensitiveWordFilter = require("./index.js");

let filter = global.filter = new SensitiveWordFilter(require("./sensitive_word.json"));


let ret = filter.replaceSensitiveWord("aaa…µ123±∆");
console.log(ret);