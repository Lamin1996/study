console.log("aaa")
var $ = require('jquery')


var txt = require('./index.txt');
console.log(txt)
$('body').html('hello world' +  txt.default);