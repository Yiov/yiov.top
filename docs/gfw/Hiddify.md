# Hiddify的安装及使用




## 简介

Hiddify是一款基于 Sing-box 通用代理工具

由 Hidden（隐藏）和 Simplify（简化）的合并而来

官网：https://hiddify.com/

仓库：https://github.com/hiddify/hiddify-next/


![](/Hiddify/Hiddify.png)




## 客户端

* iOS端：开发版测试中

* [Android端](https://github.com/hiddify/hiddify-next/releases)

* [Windows端](https://github.com/hiddify/hiddify-next/releases)

* [Mac端](https://github.com/hiddify/hiddify-next/releases)

* [Linux端](https://github.com/hiddify/hiddify-next/releases)



## 协议

| 类型 | 支持协议 |
|:-:|:-:|
| 节点 | Vless、Vmess、Reality、TUIC、Wireguard、Hysteria、Trojan、SSH |
| 订阅 | Sing-box、V2ray、Clash、Clash meta |




## 安装


::: details Android端 安装

下载并安装 [Hiddify](https://github.com/hiddify/hiddify-next/releases)

![](/Hiddify/android/android-01.png)

![](/Hiddify/android/android-02.png)

:::







::: details Windows端 安装

下载 [Hiddify](https://github.com/hiddify/hiddify-next/releases) 压缩包

![](/Hiddify/windows/windows-01.png)

解压并打开 `Hiddify.exe`

![](/Hiddify/windows/windows-02.png)


![](/Hiddify/windows/windows-03.png)

:::







## 使用




:::: details Android端 使用


找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址

![](/Hiddify/android/android-03.png)


剪切板添加 或者 手动输入，保存

![](/Hiddify/android/android-04.png)

添加成功后，在代理中选择延迟低的

![](/Hiddify/android/android-05.png)

连接之前需要改一下配置，否则无法使用

左上角三横 `≡` - 配置选项- 远程DNS改成 `tls://8.8.8.8` 或者 `tls://8.8.4.4`

```
tls://8.8.8.8
```

::: details 如果还是连不上？

根据自己运营商修改直连DNS

```
中国移动 DNS：211.138.180.2
备用 DNS 服务器：211.138.180.3

中国联通 DNS：221.131.143.69
备用 DNS 服务器：221.131.143.69

中国电信 DNS：223.5.5.5
备用 DNS 服务器：223.6.6.6
```
:::

![](/Hiddify/android/android-06.png)

点击连接，访问 [谷歌](https://www.google.com) 看看


![](/Hiddify/android/android-07.png)

::::







:::: details Windows端 使用

点击 `添加新的配置文件`

![](/Hiddify/windows/windows-04.png)

手动或者剪切板都可以

![](/Hiddify/windows/windows-05.png)


找一个 [免费送流量的机场注册](./channel.md)，一键订阅 - 复制订阅地址

![](/Hiddify/windows/windows-06.png)


粘贴订阅，保存

![](/Hiddify/windows/windows-07.png)


点击连接

![](/Hiddify/windows/windows-08.png)


![](/Hiddify/windows/windows-09.png)


要是延迟高，可以在代理中测速，选择最优的

![](/Hiddify/windows/windows-10.png)

访问 [谷歌](https://www.google.com) 看看

::: details 虽然连接成功，但访问不了

左上角三横 `≡` - 配置选项- 远程DNS

```
tls://8.8.8.8

或者

tls://8.8.4.4
```


还连不上，根据自己运营商修改直连DNS

```
中国移动 DNS：211.138.180.2
备用 DNS 服务器：211.138.180.3

中国联通 DNS：221.131.143.69
备用 DNS 服务器：221.131.143.69

中国电信 DNS：223.5.5.5
备用 DNS 服务器：223.6.6.6
```
:::

![](/Hiddify/windows/windows-11.png)

::::
