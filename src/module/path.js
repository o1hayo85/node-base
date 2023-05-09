import path from 'path';

const filePath = import.meta.url;

// 解析文件路径中的文件名称, 第二个参数如果匹配则省略后缀，不匹配则全部返回
console.log('path basename', path.basename(filePath, '.jsx'));

// 获取路径中的目录名称
console.log('path dirname', path.dirname(filePath));
console.log(path.dirname('/a/b/c'));
console.log(path.dirname('/a/b/c/'));

// 获取路径中的扩展名称
console.log(path.extname(filePath))