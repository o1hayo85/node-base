const nodeModule = require('module');

console.log(module.exports === exports);
console.log(module);
console.log('🚀 ~ file: export.js:2 ~ exports:', exports);
console.log('🚀 ~ file: export.js:2 ~ module.exports:', module.exports);
console.log('🚀 ~ file: export.js:2 ~ nodeModule:', nodeModule);
