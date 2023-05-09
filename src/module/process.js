const { memoryUsage,
  cpuUsage,
  cwd,
  version,
  versions,
  arch,
  env,
  platform,
  argv,
  argv0,
  pid,
  ppid,
  uptime,
} = process;

// 内存相关获取
console.log('memory', memoryUsage());
/**
 * memory {
 *  rss: 常驻内存
 *  heapTotal: 总内存
 *  heapUsed: 已使用内存
 *  external: C++扩展内存
 *  arrayBuffers: 缓冲区大小
 * }
 */

// cup相关信息
console.log('cup', cpuUsage());
/**
 * cup { 
 *  user: 31000, // 用户占用时间片段
 *  system: 0 // 系统占用时间片段
 * }
 */

// 运行目录
console.log('current directory', cwd());

// node版本
console.log('node version', version);

// 运行环境版本
console.log('env version', versions)

// cup架构
console.log('cpu arch', arch);

// 环境 npm run setprod
console.log('env', env.NODE_ENV);

// 环境变量
console.log('env path', env.PATH);

// 运行平台
console.log('run platform', platform);

// 启动参数
console.log('first arg', argv0);
console.log('args', argv);

// pid 进程身份标识
console.log('pid', pid);
console.log('ppid', ppid);

// 脚本运行时间
console.log('uptime', uptime())
