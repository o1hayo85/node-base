import path from 'path';

const filePath = import.meta.url;
const dir = path.dirname(filePath);

// 解析文件路径中的文件名称, 第二个参数如果匹配则省略后缀，不匹配则全部返回
console.log('path basename', path.basename(filePath, '.jsx'));

// 获取路径中的目录名称
console.log('path dirname', path.dirname(filePath));
console.log(path.dirname('/a/b/c'));
console.log(path.dirname('/a/b/c/'));

// 获取路径中的扩展名称
console.log(path.extname(filePath))

// 解析文件路径
console.log(path.parse(filePath));

// 序列化路径
console.log('path format',path.format({
  root: '',
  dir: 'file:///d:/front%20project/node-base/src/module',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}))

// 是否绝对路径， 从文件系统的跟目录开始的完整路径,包含了文件的完整路径
console.log(path.isAbsolute(filePath), filePath)
console.log(path.isAbsolute('./process.js'), './process.js');
console.log(path.isAbsolute('/process.js'), '/process.js');

// 拼接路径, 使用'..'会解析相对路径
console.log(path.join(dir, './process.js'));

// 将路径或路径片段的序列解析为绝对路径, 从右向左解析,遇到绝对路径则停止，没有绝对路径则添加运行目录
console.log(path.resolve(dir, '../process.js'));
console.log(path.resolve(dir));
console.log(path.resolve('src/module/path.js'));

// 规范化路径 
console.log(path.normalize('foo/bar//baz/asdf/quux/..')); // 相对路径 foo\bar\baz\asdf
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // 绝对路径 \foo\bar\baz\asdf


// 获取相对路径 from -> to
console.log('relative path', path.relative(dir, './path.js'));