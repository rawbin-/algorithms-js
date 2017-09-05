
var testObj = require('../src/');

let result = testObj.combined.combined.getCombination('123456',4)
for(var i = result.length; i--;){
    console.log(result[i])
}