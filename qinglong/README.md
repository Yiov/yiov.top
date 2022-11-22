
## 青龙面板的安装及使用

</br>



更新时间：2021-11-24


仓库：https://github.com/whyour/qinglong

镜像：https://hub.docker.com/r/whyour/qinglong

tg群：https://t.me/jiao_long


</br>
</br>

## 准备条件

* [服务器](https://github.com/Yiov/notes/tree/main/ECS)

* [SSH工具](https://github.com/Yiov/notes/tree/main/Xshell)

* [安装docker](https://github.com/Yiov/notes/tree/main/docker)

</br>
</br>





## 1.安装青龙面板

</br>


### 1.1 配置国内源镜像

</br>

```
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": [
    "https://0b27f0a81a00f3560fbdc00ddd2f99e0.mirror.swr.myhuaweicloud.com",
    "https://ypzju6vq.mirror.aliyuncs.com",
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
EOF
systemctl daemon-reload
systemctl restart docker
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-01.png)


</br>


### 1.2 拉取青龙镜像

</br>

> 不拉也行，起容器的时候也会自动拉取

```
cd
docker pull whyour/qinglong:latest
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-02.png)



</br>



### 1.3 创建青龙容器

</br>

第一个5700是映射端口可以改，第二个5700是监听端口不要动

> 比如改成：`-p 5600:5700` 

```
docker run -dit \
  -v $PWD/ql/data:/ql/data \
  -p 5700:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-03.png)


</br>



### 1.4 重启防火墙和放行端口


</br>

```
systemctl start firewalld
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-04.png)



放行5700端口

> 如果你映射端口改了还需要放行映射的端口
>
> 服务器放行后，还需要在安全组/防火墙放行

```
firewall-cmd --zone=public --add-port=5700/tcp --permanent
```

```
firewall-cmd --zone=public --add-port=5600/tcp --permanent
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-05.png)


</br>



### 1.5 访问青龙面板

</br>

访问青龙面板：http://你的公网ip:5600

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-06.png)



开始安装-设置账户密码-提交

> 通知可以先跳过，之后再添加，完成即可

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-07.png)


登录青龙，进入青龙前端

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-08.png)

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-09.png)


</br>



### 1.6 其他命令

</br>


```
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

# 依次执行，如果设置了随机延迟，将随机延迟一定秒数
task <file_path>                                             
# 依次执行，无论是否设置了随机延迟，均立即运行，前台会输出日，同时记录在日志文件中
task <file_path> now                                         
# 并发执行，无论是否设置了随机延迟，均立即运行，前台不产生日，直接记录在日志文件中，且可指定账号执行
task <file_path> conc <env_name> <account_number>(可选的) 
# 指定账号执行，无论是否设置了随机延迟，均立即运行 
task <file_path> desi <env_name> <account_number>         

```

</br>











## 2.青龙面板的使用

</br>



### 2.1 拉库

右上角，添加任务

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-10.png)



拉取库脚本文件，就用faker的京东脚本演示

faker3内部互助版
```
ql repo https://ghproxy.com/https://github.com/shufflewzc/faker3.git "jd_|jx_|gua_|jddj_|jdCookie" "activity|backUp" "^jd[^_]|USER|function|utils|sendNotify|ZooFaker_Necklace.js|JDJRValidator_|sign_graphics_validate|ql|JDSignValidator|magic|depend|h5sts" "main"
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-11.png)


确定好之后，点确定，之后运行，等待一会再刷新

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-12.png)


多等一会，以免有些脚本没有加载

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-13.png)



</br>



### 2.2 安装依赖


</br>


青龙面板安装Nodejs，自动拆分：是

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

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-14.png)



Python3安装我是直接失败的，一般用不到，实在想装参考下面步骤

> qinglong为容器名


```
docker exec -it qinglong bash
```

```
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


Linux安装也很简单

```
bizCode
bizMsg  
lxml
```

</br>




### 2.3 环境变量

</br>

JD的话，这里就是添加CK账号；其他APP就按脚本说明来

> 注：用Nvjdc(现已更名为方舟)可以不用抓


[手机抓CK的教程](https://github.com/Yiov/notes/tree/main/capture#2使用)


添加变量-名称输入 `JD_COOKIE` ，值输入账号CK

```
JD_COOKIE
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-15.png)

这样就是添加成功了

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/qinglong/qinglong-16.png)


</br>





## 其他使用拓展

</br>

<details>
<summary>拓展1：运行指令 [展开]</summary>

</br>

```
# 并发
task ***.js conc JD_COOKIE
# 指定运行
task ***.js desi JD_COOKIE 1-31
# 更新面板
ql update
# 删除日志
ql rmlog 7
```
</details>

</br>




<details>
<summary>拓展2：Cron定时规则 [展开]</summary>

</br>

青龙默认定时规则为5组数字，秒为可选项目，不填

| **分** | **时** | **天（日）** | **月** | **周** |
| --- | --- | --- | --- | --- |
| 0-59 | 0-23 | 1-31 | 1-12 | 0-7 |

注：周里的0和7都代表星期天


而常用的特殊符号表达式，是最关键的了

| * | **,** | **-** | **/** |
| --- | --- | --- | --- |
| 代表所有时间段 | 分隔时段 | 时间范围 | 每个单位间隔 |


举例来说吧

例子：0 */2 * * *

我们参照例子解读
分=0；时=*/2；天＝8；月＝8；周＝*；

解读：8月8号的所有时间段每隔2小时运行一次

---


再例：0 0-22/8 * * *

我们参照例子解读
分=0；时=0-22/2；天＝*；月＝*；周＝*；

解读：每天的0-22点之间，每隔2小时运行一次

---


再例：0 0,10,22 * * *

我们参照例子解读
分=0；时=0,10,22；天＝*；月＝*；周＝*；

解读：每天的0点，10点，22点，运行一次


</details>

</br>






<details>
<summary>拓展3：青龙通知修改 [展开]</summary>

</br>


每个脚本运行完成后，通知下方会有一个链接

> 本通知 By：https://github.com/whyour/qinglong


路径 `/root/ql/scripts/sendNotify.js`

右键-编辑，下滑找到

```
author = '\n\n本通知 By：https://github.com/whyour/qinglong',
```

我们将n后面的修改成自己想要的即可

```
author = '\n\n 活动入口:<a href="https://www.yuque.com/dizipianbupian/mmy5np/rhyzif">https://www.yuque.com/dizipianbupian/mmy5np/rhyzif</a>',
```

</details>

</br>





<details>
<summary>拓展4：青龙多开容器 [展开]</summary>

</br>


文字部分，自己修改一下

```
docker run -dit \
  -v $PWD/自定义目录不能与已有目录重名/data:/ql/data \
  -p 自定义青龙端口后面的不要改:5700 \
  --name 自定义的容器名不能与已有容器重名 \
  --hostname 上面自定义的容器名 \
  --restart unless-stopped \
  whyour/qinglong:latest
```
</details>

</br>
</br>





<details>
<summary>拓展5：自己写通知脚本 [展开]</summary>

</br>

* 简单版本

设定的message值等于空，推送的时候就会为空，如果你不设定message，通知就无法调起

我们可以设一个message值等于空，然后在引用message的时候，在后面添加想要的文字

`${message}\n\n 这里填想要的文字`

注意：\n代表换行

```
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


</br>



* 完整版本

`$.msg($.name, message);`

表示调用系统通知（脚本名，消息）

message += `这是第1个数据\n`

+=表示消息累加 \n表示换行


```
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




</details>

</br>





## 常见问题

</br>

### 1.拉不了库

</br>

要么是库的问题，要么是代理的问题，github被墙很正常

解决：手动下载-上传-然后解压到 **/root/ql/repo**

或者SSH下载

```
CD /roott/ql/repo
wget https://codeload.github.com/shufflewzc/faker3/zip/refs/heads/main.zip && unzip main.zip #下载并解压
mv main shufflewzc_faker3 #改名
```

</br>
</br>

### 2.忘记青龙面板密码


若密码忘了，在终端用代码查看

> password是密码
>
> 宝塔目录下root/ql/config/auth.json也可查看

```
cat /root/ql/config/auth.json
```






