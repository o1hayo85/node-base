import fs from 'fs';
import path from 'path';
import url from 'url';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// 读取文件api
//  readFile 异步读取 readFileSync同步读取
fs.readFile(path.join(dirname, './corpus/data.json'), { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error(err);
  }
});
