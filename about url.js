/** url **/
const URL = require('url');
/* new URL.URL */
// const nodeUrl = new URL.URL('https://cn.bing.com/search?q=%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91&FORM=TTAHP1&form=TTSREF&isTTRefreshQuery=1');
// console.log(nodeUrl.searchParams.get('q')); // 必应翻译
// console.log(nodeUrl.searchParams.size); // 4
// console.log(nodeUrl.searchParams.has('FORM'));  // true

/* URL.parse */
// const parseUrl = new URL.parse('https://cn.bing.com/search?q=%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91&FORM=TTAHP1&form=TTSREF&isTTRefreshQuery=1', true); // 参数二为true时，query会被解析为对象
// console.log(parseUrl);

/* URL.format */
const obj = {
  href: 'https://cn.bing.com/search?q=%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91&FORM=TTAHP1&form=TTSREF&isTTRefreshQuery=1',
  origin: 'https://cn.bing.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'cn.bing.com',
  hostname: 'cn.bing.com',
  port: '80',
  pathname: '/search',
  search: '?q=%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91&FORM=TTAHP1&form=TTSREF&isTTRefreshQuery=1',
  hash: ''
}
console.log(URL.format(obj)); // https://cn.bing.com/search?q=%E5%BF%85%E5%BA%94%E7%BF%BB%E8%AF%91&FORM=TTAHP1&form=TTSREF&isTTRefreshQuery=1