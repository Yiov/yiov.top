# 青龙面板的安装及使用





## 简介

一个支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台

仓库：https://github.com/whyour/qinglong

镜像：[https://hub.docker.com/r/whyour/qinglong](https://hub.docker.com/r/whyour/qinglong)

tg群：[https://t.me/jiao_long](https://t.me/jiao_long)


![](/qinglong/qinglong-01.png)


## 准备条件

* [服务器](./Server/)

* [shell工具](./shell/)

* [安装docker](./docker.md)







## 安装


### 拉取镜像


```sh
cd
docker pull whyour/qinglong:latest
```

![](/qinglong/qinglong-02.png)







### 创建容器


冒号前的 `5700` 是映射端口建议改，冒号后的 5700 是监听端口，尽量不要动

```sh{4}
docker run -dit \
  -v $PWD/ql/data:/ql/data \
  # 冒号后面的 5700 为默认端口，如果设置了 QlPort, 需要跟 QlPort 保持一致
  -p 5700:5700 \
  # 部署路径非必须，比如 /test
  -e QlBaseUrl="/" \
  # 部署端口非必须，当使用 host 模式时，可以设置服务启动后的端口，默认 5700
  -e QlPort="5700" \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

::: tip 说明
我这里端口改成了 `5600`
:::

![](/qinglong/qinglong-03.png)





### 重启防火墙


```sh
systemctl start firewalld
```

![](/qinglong/qinglong-04.png)



### 放行端口

放行5700端口，另外 [服务器里的端口(安全组/防火墙)](./Server/tencent.md#防火墙) 也要放行

::: tip 说明
如果你映射端口改了，请放行更改后的映射端口
:::

```sh
firewall-cmd --zone=public --add-port=5600/tcp --permanent
```

```sh
firewall-cmd --zone=public --add-port=5700/tcp --permanent
```

![](/qinglong/qinglong-05.png)






## 登录面板



### 访问

青龙面板地址：`http://你的公网ip:端口`

::: details 网页打不开？
请检查，是否开启对应的端口！

虚拟机请安装 [宝塔面板](./BT.md) 后查看端口是否放行，再次访问即可
:::

![](/qinglong/qinglong-06.png)



开始安装-设置账户密码-提交

::: tip 说明
通知可以先跳过，之后再添加，完成即可
:::

![](/qinglong/qinglong-07.png)


登录青龙，进入青龙前端

![](/qinglong/qinglong-08.png)

![](/qinglong/qinglong-09.png)






### 命令


```sh
# 更新并重启青龙
ql update
# 查看日志
docker logs -f qinglong                                                    
# 运行自定义脚本extra.sh
ql extra                                                     
# 添加单个脚本文件
ql raw <file_url>                                             
# 添加单个仓库的指定脚本
ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch> <extensions>
# 删除旧日志
ql rmlog <days>                                              
# 启动tg-bot
ql bot                                                       
# 检测青龙环境并修复
ql check                                                     
# 重置登录错误次数
ql resetlet                                                  
# 禁用两步登录
ql resettfa                                                  

---

# 依次执行，如果设置了随机延迟，将随机延迟一定秒数
task <file_path>                                             
# 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中
task <file_path> now                                         
# 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行
task <file_path> conc <env_name> <account_number>(可选的) 
# 指定账号执行，无论是否设置了随机延迟，均立即运行 
task <file_path> desi <env_name> <account_number>      
# 设置任务超时时间   
task -m <max_time> <file_path>
# 使用 -- 分割，-- 后面的参数会传给脚本，下面的例子，脚本就可接收到参数 -u whyour -p password
task <file_path> -- -u whyour -p password

```











## 使用



### 拉库

右上角，添加任务

![](/qinglong/qinglong-10.png)



拉取库脚本文件，就用faker的京东脚本演示

faker3内部互助版
```
ql repo https://ghproxy.com/https://github.com/shufflewzc/faker3.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts" "main"
```

::: tip 说明
这里添加后先禁用，了解 [cron定时规则](#其他拓展) 再来改
:::

![](/qinglong/qinglong-11.png)


确定好之后，点确定，之后运行，等待一会再刷新

![](/qinglong/qinglong-12.png)


多等一会，以免有些脚本没有加载

![](/qinglong/qinglong-13.png)





### 安装依赖


依赖管理 - `Nodejs` ，自动拆分 `是`

```
png-js
@types/node  
require
typescript
crypto-js
prettytable
dotenv
jsdom
date-fns
tough-cookie
tslib
ws@7.4.3
ts-md5
jsdom -g
jieba
fs
form-data
json5
global-agent 
png-js
@types/node  
require
typescript
js-base64
axios
```

![](/qinglong/qinglong-14.png)



依赖管理 - `Python3` 我是直接失败的，实在想装参考下面步骤

::: tip 说明
`qinglong` 为容器名
:::

```sh
docker exec -it qinglong bash
```

```sh
curl -sS https://bootstrap.pypa.io/get-pip.py | python3
```

然后再执行下列依赖即可

```
requests
canvas
ping3
jieba
PyExecJS
aiohttp
json5
pycryptodomex
```


依赖管理 - `Linux` 安装也很简单

```
bizCode
bizMsg  
lxml
```






### 环境变量



京东的话，这里就是添加CK账号；其他APP就按脚本说明来


添加变量 - 名称输入 `JD_COOKIE` ，值输入账号CK

```
JD_COOKIE
```

![](/qinglong/qinglong-15.png)

这样就是添加成功了

![](/qinglong/qinglong-16.png)








## 其他拓展



::: details 其他运行指令


```sh
# 并发
task ***.js conc JD_COOKIE
# 指定运行
task ***.js desi JD_COOKIE 1-31
# 更新面板
ql update
# 删除日志
ql rmlog 7
```

:::





::: details Cron定时规则


青龙默认定时规则为5组数字，秒为可选项目，不填

| **分** | **时** | **天（日）** | **月** | **周** |
| --- | --- | --- | --- | --- |
| 0-59 | 0-23 | 1-31 | 1-12 | 0-7 |

注：周里的0和7都代表星期天


而常用的特殊符号表达式，是最关键的了

| * | **,** | **-** | **/** |
| --- | --- | --- | --- |
| 代表所有时间段 | 分隔时段 | 时间范围 | 每个单位间隔 |


```
* 例子1：0 */2 8 8 *

我们参照例子解读
分=0；时=*/2；天＝8；月＝8；周＝*；

解读：8月8号的所有时间段每隔2小时运行一次



* 例子2：0 0-22/8 * * *

我们参照例子解读
分=0；时=0-22/8；天＝*；月＝*；周＝*；

解读：每天的0-22点之间，每隔8小时运行一次



* 例子3：0 0,10,22 * * *

我们参照例子解读
分=0；时=0,10,22；天＝*；月＝*；周＝*；

解读：每天的0点，10点，22点，运行一次

```

::: 







:::: details 青龙通知修改


每个脚本运行完成后，通知下方会有一个链接

::: tip 通知
`本通知 By：https://github.com/whyour/qinglong`
:::


路径 `/root/ql/scripts/sendNotify.js`

右键-编辑，下滑找到，我们将n后面的修改成自己想要的即可

```diff
- author = '\n\n本通知 By：https://github.com/whyour/qinglong',

+ author = '\n\n 活动入口:<a href="https://github.com/yiov">https://github.com/yiov</a>',
```

::::







::: details 青龙多开容器



文字部分，自己修改一下

```sh
docker run -dit \
  -v $PWD/自定义目录不能与已有目录重名/data:/ql/data \
  -p 自定义青龙端口后面的不要改:5700 \
  --name 自定义的容器名不能与已有容器重名 \
  --hostname 上面自定义的容器名 \
  --restart unless-stopped \
  whyour/qinglong:latest
```

:::









:::: details 自己写通知脚本



* 简单版本

设定的message值等于空，推送的时候就会为空，如果你不设定message，通知就无法调起

我们可以设一个message值等于空，然后在引用message的时候，在后面添加想要的文字

`${message}\n\n 这里填想要的文字`

注意：`\n` 代表换行

::: details 点击查看 简单代码
```js
/*
这里是注释

cron 0 8 * * * jbm.js
*/

const $ = new Env("这里填脚本名或其他");
const notify = $.isNode() ? require('./sendNotify') : '';
message = ""


!(async () => {


if ($.isNode()) {
             await notify.sendNotify("这里是通知的标题", `${message}\n\n 通知的内容 \n代表换行`);
        }

    })()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())



//固定模板 不要动
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
```
:::





* 完整版本

`$.msg($.name, message);` 表示调用系统通知（脚本名，消息）

message += `这是第1个数据\n`

`+=` 表示消息累加 `\n` 表示换行


::: details 点击查看 完整版本代码
```js
/*
这里是注释

这里是cron表达式
cron 0 8 * * * jbm.js
*/

//这里设定脚本名
const $ = new Env("这里填脚本名或其他");
//这里是调取青龙通知
const notify = $.isNode() ? require('./sendNotify') : '';
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
let message = '' //块作用域定义message变量


//async 异步函数 常与await和function一起用
!(async () => {
  
  
	await check() //等待表达式 check只是演示 可以自己根据需求更改
  
  
  //通知体
	if (notifyFlag == 1) {
		$.msg($.name, message);
		if ($.isNode()) {
			await notify.sendNotify($.name, message)
		}
	}


//以下3个是async函数的完整体 不要改
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())


//function函数 找到你想要的数据
function check() {
  
  message += `这是第1个数据\n`
  message += `这是第2个数据\n`
    
}



//固定模板 不要动
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

```
:::


::::








## 常见问题



1.拉不了库


要么是库的问题，要么是代理的问题，github被墙很正常

解决：手动下载 - 上传 - 然后解压到 `/root/ql/repo` 或 `SSH下载`

```sh
#ssh下载
cd /roott/ql/repo

#下载并解压
wget https://codeload.github.com/shufflewzc/faker3/zip/refs/heads/main.zip && unzip main.zip

#改名
mv main shufflewzc_faker3
```




2.忘记青龙面板密码

若密码忘了，在终端用代码查看

::: tip 说明
password是密码

宝塔目录下 `root/ql/config/auth.json` 也可查看
:::

```sh
cat /root/ql/config/auth.json
```






