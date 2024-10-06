# Markdown的简单用法




## 简介

Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）

文档后缀为 `.md` 或 `.markdown`，目前它已是 [GitHub](../website/pages/github.md) 的御用书写格式

* 弥补了传统纯文本缺少样式的不足

* 降低了传统 Word、HTML 等样式文本的技术门槛






## 工具

带 ⭐ 的是有教程的，点击即可跳转

::: tip 说明
软件和网站有很多，本人只列了自己使用过的

可以根据自己的使用习惯挑选
:::

| 软件 | 支持平台 | 是否收费 |
|:-:|:-:|:-:|
| [Typora](https://typoraio.cn/) | iOS / Mac / Windows / Linux | 收费 |
| [Mweb](https://zh.mweb.im/) | iOS / Mac | 收费 |
| |
| [⭐VSCode](../website/VSCode.md) | Mac / Windows / Linux | 免费 |
| [Obsidian](https://obsidian.md/) | Android / iOS / Mac / Windows / Linux | 免费 |
| [Joplin](https://github.com/laurent22/joplin/) | Android / iOS / Mac / Windows / Linux | 免费 |
| [Marked Demo](https://marked.js.org/demo/) | 网页端 | 免费 |






## 标题


以 `#` 号开头，后面至少一个空格，和H1~H6一样的

输入：

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```


还有另一种写法，也可以，不过仅限于一级和二级

输入：

```
标题1的下方加等号
=

标题2的下方加横杠
-
```






## 列表


列表用的比较多了，逐一来讲


### 无序列表

以 `*` 或 `+` 或 `-` 开头，后面至少一个空格，标识为实心●圆点

输入：

```md
* 这是第1句
+ 这是第2句
- 这是第3句
```

输出：

* 这是第1句
+ 这是第2句
- 这是第3句






### 有序列表


全部使用 `1.` 即可，生成的时候会自增

::: tip 说明
也可手动使用 `1.` 、`2.` 、`3.`
:::

输入：

```md
1. 我的天哪
1. 这么神奇
1. 小岳岳
```

输出：

1. 我的天哪
1. 这么神奇
1. 小岳岳





### 层级列表


和无序列表一样，使用 `*` 号开头

每下一层比上一层多 **2个空格**

::: warning 注意
第一层前面**不可超过3个空格**

第一级的标识为实心●圆点，第二级的标识为空心○圆点，第3级以后的标识均为实心■方点
:::

输入：

```md
* 中国
  * 北京
    * 海淀区
      * 百度
  * 浙江
    * 杭州
      * 阿里巴巴
  * 广东
    * 深圳
      * 腾讯
```

输出：

* 中国
  * 北京
    * 海淀区
      * 百度
  * 浙江
    * 杭州
      * 阿里巴巴
  * 广东
    * 深圳
      * 腾讯





### 任务列表


和无序列表一样，使用 `*` 号开头

格式如下， `[  ]` 里面是空格，若完成了， `[  ]` 里的空格换成X

输入：

```md
* [ ] 吃饭
* [ ] 睡觉
* [x] 打豆豆
```

输出：

![](/markdown/markdown-01.png)







## 引用


引用比较简单，符号是 `>`，可以多层嵌套

输入：

```md
> 青玉案·元夕
>> 辛弃疾
>>>东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
>>>蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。
```

输出：

> 青玉案·元夕
>> 辛弃疾
>>>东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
>>>蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。






## 字体


字体的格式也有些多，放在一起吧，符号后无空格

```md
*斜体字*

**粗体字**

~~删除线~~

`高亮`

<u>下划线</u>

<span style="border-bottom:2px dashed yellow;">加下划线用的是html代码</span>
```

输出：

*斜体字*

**粗体字**

~~删除线~~

`高亮`

<u>下划线</u>

<span style="border-bottom:2px dashed yellow;">加下划线用的是html代码</span>






## 图片链接

此方法，适用于图片/视频/音频等，有链接都可以

```md
![替代文字](图片地址)
```
::: tip 说明
注：[ ]中括号的替代文字可留空
:::

输入：

```md
![小岳岳](https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181204%2F86b842eb7b6648cca02e9254c751041d.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644145498&t=5d9dfddd717d73b1b129cd0cec967f92)
```
输出：

![小岳岳](https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181204%2F86b842eb7b6648cca02e9254c751041d.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644145498&t=5d9dfddd717d73b1b129cd0cec967f92)



如果在链接后加 `空格双引号接内容` ，无地址或失效，这时候引号内的文字就有作用了

输入：

```md
![小岳岳](https://地址失效后 "我的天哪")
```

输出：

![小岳岳](https://地址失效后 "我的天哪")







## 超链接


### 行内式



```md
格式1：[这里填文字](这里是跳转的网址)

格式2：[这里填文字](这里是跳转的网址 "这里填鼠标放上去显示的文字")
```

输入：

```md
[百度](http://www.baidu.com)

[百度](http://www.baidu.com "百度一下，你就知道")
```

输出：

[百度](http://www.baidu.com)

[百度](http://www.baidu.com "百度一下，你就知道")






### 自动连接


```md
格式：<这里填网址>
```

输入：

```md
<http://www.baidu.com/>
```

输出：

<http://www.baidu.com/>







## 分割线


同时使用3个连续的 `*` 或 `-` 或 `_` 表示分割线

输入：

```md
分隔线1*星号
***

分隔线2-+换行+横杠

---

分隔线3_下划线
___
```

::: details 点击查看 输出

分隔线1*星号
***

分隔线2-+换行+横杠

---

分隔线3_下划线
___
:::




## 代码块

### 单个代码

2个反引号，中间写文字或者代码

输入：

```md
`突出文字`
```

输出：

`突出文字`


### 多行代码

上下三个反引号 ``` 开始和结尾，中间放内容/文字/代码

::: tip 说明
前面加4个空格也是可以的，但不建议这么做
:::

输入：

````md
```sh
pnpm vuepress dev
```
````

输出：

```sh
pnpm vuepress dev
```


### 代码块嵌套

比如我们想展示代码块的写法，但是反引号已经用了，那么我们就用4个反引号 ```` ，以此类推即可

输入：

`````md
````sh
```
pnpm vuepress build
```
````
`````


输出：

````sh
```
pnpm vuepress build
```
````



### 代码新增行加亮

加入diff即可，`+` 或 `-` 都可以表示


输入：

````md
```diff
- pnpm add -D vuepress@next
+ pnpm add -D vuepress@next @vuepress/client@next vue
```
````

输出：

```diff
- pnpm add -D vuepress@next
+ pnpm add -D vuepress@next @vuepress/client@next vue
```




## 锚点



```md
格式：[说明文字](#要跳转的位置)
```

输入：

::: tip 说明
无论是几级标题，都只用一个#
:::

```md
[跳转到代码块的位置](#代码块)
```

输出：

[跳转到代码块的位置](#代码块)





## 表格

* 第一行：表头行，用 `|` 隔开，控制分列


* 第二行：控制行，用 `-` 隔开，控制分行

::: tip 说明
使用冒号 `:` 可控制对齐方式

`:-` 表示左对齐

`.`或 `:-:` 表示中对齐

`-:` 表示右对齐
:::

* 第三行及以下：数据行,用 `|` 隔开


表头行和控制行数量要一致，否则不生效！

```md
| 名字 | 性别 | 年龄 | 部门 |
|:-:|:-:|:-:|:-:|
| 张三 | 男 | 21 | 产品 |
| 李四 | 女 | 18 | 开发 |
| 王二 | 男 | 20 | 销售 |
```

输出：

| 名字 | 性别 | 年龄 | 部门 |
|:-:|:-:|:-:|:-:|
| 张三 | 男 | 21 | 产品 |
| 李四 | 女 | 18 | 开发 |
| 王二 | 男 | 20 | 销售 |


采用html的 `<table>标签` 也可以实现

::: tip 说明

* `align="center"` ：居中

* `colspan="2"` ：横向合并2格

* `rowspan="2"` ：纵向合并2格


觉得麻烦，可以用 [在线表格转换工具](https://tableconvert.com/zh-cn/)
:::



输入：

```html
<table>
    <tbody>
        <tr>
            <td align="center">名字</td>
            <td align="center">性别</td>
            <td align="center">年龄</td>
            <td align="center">部门</td>
        </tr>
        <tr>
            <td align="center">张三</td>
            <td align="center">男</td>
            <td align="center">21</td>
            <td align="center" rowspan="2">产品</td>
        </tr>
        <tr>
            <td align="center">李四</td>
            <td align="center">女</td>
            <td align="center">18</td>
        </tr>
        <tr>
            <td align="center" colspan="2">王二 男</td>
            <td align="center">20</td>
            <td align="center">销售</td>
        </tr>
    </tbody>
</table>
```


输出：

<table>
    <tbody>
        <tr>
            <td align="center">名字</td>
            <td align="center">性别</td>
            <td align="center">年龄</td>
            <td align="center">部门</td>
        </tr>
        <tr>
            <td align="center">张三</td>
            <td align="center">男</td>
            <td align="center">21</td>
            <td align="center" rowspan="2">产品</td>
        </tr>
        <tr>
            <td align="center">李四</td>
            <td align="center">女</td>
            <td align="center">18</td>
        </tr>
        <tr>
            <td align="center" colspan="2">王二 男</td>
            <td align="center">20</td>
            <td align="center">销售</td>
        </tr>
    </tbody>
</table>


带连接跳转的，可以使用 `<a>标签` 实现

输入：

```md
<table>
    <tbody>
        <tr>
            <td align="center">脚本管理器</td>
            <td align="center">别名</td>
            <td align="center">脚本市场</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://www.greasespot.net/" target="_blank">Greasemonkey</a>
            </td>
            <td align="center">油猴</td>
            <td align="center" rowspan="4">
                <a href="https://greasyfork.org/zh-CN" target="_blank">Greasy Fork</a>、
                <a href="https://chrome.pictureknow.com/" target="_blank">收藏猫</a>、
                <a href="https://chrome.google.com/webstore/category/extensions" target="_blank">谷歌商店</a>、
                <a href="https://www.chajianxw.com/" target="_blank">插件小屋</a>、
                <a href="https://www.cxyhub.com/" target="_blank">CXYHUB</a>、
                <a href="https://www.crxfun.com/" target="_blank">扩展派</a>
            </td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://www.tampermonkey.net/" target="_blank">Tampermonkey</a>
            </td>
            <td align="center">篡改猴</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://violentmonkey.github.io/" target="_blank">Violentmonkey</a>
            </td>
            <td align="center">暴力猴</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://docs.scriptcat.org/" target="_blank">ScriptCat</a>
            </td>
            <td align="center">脚本猫</td>
        </tr>
    </tbody>
</table>
```



输出：

<table>
    <tbody>
        <tr>
            <td align="center">脚本管理器</td>
            <td align="center">别名</td>
            <td align="center">脚本市场</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://www.greasespot.net/" target="_blank">Greasemonkey</a>
            </td>
            <td align="center">油猴</td>
            <td align="center" rowspan="4">
                <a href="https://greasyfork.org/zh-CN" target="_blank">Greasy Fork</a>、
                <a href="https://chrome.pictureknow.com/" target="_blank">收藏猫</a>、
                <a href="https://chrome.google.com/webstore/category/extensions" target="_blank">谷歌商店</a>、
                <a href="https://www.chajianxw.com/" target="_blank">插件小屋</a>、
                <a href="https://www.cxyhub.com/" target="_blank">CXYHUB</a>、
                <a href="https://www.crxfun.com/" target="_blank">扩展派</a>
            </td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://www.tampermonkey.net/" target="_blank">Tampermonkey</a>
            </td>
            <td align="center">篡改猴</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://violentmonkey.github.io/" target="_blank">Violentmonkey</a>
            </td>
            <td align="center">暴力猴</td>
        </tr>
        <tr>
            <td align="center">
                <a href="https://docs.scriptcat.org/" target="_blank">ScriptCat</a>
            </td>
            <td align="center">脚本猫</td>
        </tr>
    </tbody>
</table>




## 脚注(注解)

使用 `[^]` 或 `[^1]` 来表示

输入：

```md
我的天哪^[出自于云鹏]

我的天哪：这句出自于[^2]
[^2]:出自于：岳云鹏

```


输出：

![](/markdown/markdown-02.png)



## 上标/下标

上标使用 `^2^`

下标使用 `~2~`

输入：

```md
10^2^*10^2^=100^2^

X~1~+X~2~=Y
```

输出：

![](/markdown/markdown-03.png)


## 换行

回车只能换一行，多次换行可以用 `<br>` 标签表示

::: tip 说明
在VuePress中直接使用 `<br>` ，不要使用结束标签 `<br/>`

否则无法被渲染，不可用
:::

```md
<br>
```
