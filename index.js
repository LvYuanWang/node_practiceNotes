// http模块
const http = require('http');
const URL = require('url');
const path = require('path');
const fs = require('fs');

/**
 * 判断文件是否存在
 */
async function exists(pathname) {
  try {
    return await fs.promises.stat(pathname);
  } catch (error) {
    return null;
  }
}

/**
 * 获取请求内容详情
 */
async function getRequestDetailContent(url) {
  const urlObj = URL.parse(url);
  const pathname = urlObj.pathname.substring(1);
  let dirname = path.resolve(__dirname, "public", pathname);
  let stat = await exists(dirname);
  if (!stat) {
    return null;
  } else if (stat.isDirectory()) {
    dirname = path.resolve(__dirname, "public", pathname, "index.html");
    stat = await exists(dirname);
    if (!stat) {
      return null;
    } else {
      return await fs.promises.readFile(dirname);
    }
  } else {
    return await fs.promises.readFile(dirname);
  }
}

const server = http.createServer(async (req, res) => {
  const fileContent = await getRequestDetailContent(req.url);
  const errorPage = await fs.promises.readFile(path.resolve(__dirname, "public", "404.html"));
  !fileContent && (res.statusCode = 404, res.write(errorPage)) || res.write(fileContent);
  res.end();
})

server.listen(9527);

server.on('listening', () => {
  console.log('listening port in 9527...');
})