

## Markdown的简单用法

</br>

本文章仅为个人兴趣，如有侵权，请发邮件联系删除490857007@qq.com


更新时间：2022-11-15


</br>
</br>



## 关于Markdown

</br>

> Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。


Markdown语法简明便捷，既弥补了传统纯文本缺少样式的不足，又降低了传统 Word、HTML 等样式文本的技术门槛，目前它已是全球最大的技术分享网站 GitHub 和技术问答网站 StackOverFlow 的御用书写格式。


</br>
</br>


## 演示网站

</br>

当然演示的软件和网站有很多，你自己去度娘找也可以


* [Marked Demo](https://marked.js.org/demo/)

* [markdown在线工具](https://tool.lu/markdown/)

* [雷欧的前端客栈](https://www.xkboke.com/web-inn/onlineTool/markdown-online.html)


</br>
</br>


## 1.标题

</br>


以 **#** 号开头，后面至少一个空格，和H1~H6一样的

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-01.png)


还有另一种写法，也可以，不过仅限于一级和二级


```
标题1的下方加等号
=

标题2的下方加横杠
-
```


</br>
</br>




## 2.列表

</br>


列表用的比较多了，逐一来讲

</br>

### 2.1 无序列表

</br>

以 `*` 或 `+` 或 `-` 开头，后面至少一个空格，标识为实心●圆点


```
* 这是第1句
+ 这是第2句
- 这是第3句
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-02.png)

</br>


### 2.2 有序列表

</br>

全部使用 `1.` 即可，生成的时候会自增

> 也可手动使用 `1.` 、`2.` 、`3.`

```
1. 我的天哪
1. 这么神奇
1. 小岳岳
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-03.png)


</br>


### 2.3 层级列表

</br>

和无序列表一样，使用 `*` 号开头

每下一层比上一层多 **2个空格**

一般仅用一、二、三级列表，第一级的标识为实心●圆点，第二级的标识为空心○圆点，第三级的标识为实心■方点。

> 注意：第一层前面**不可超过3个空格**，第3层开以后的层级标识均为实心■方点

```
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


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-04.png)



</br>

### 2.4 任务列表

</br>

和无序列表一样，使用 `*` 号开头

格式如下， `[  ]` 里面是空格，若完成了， `[  ]` 里的空格换成X

```
* [ ] 吃饭
* [ ] 睡觉
* [x] 打豆豆
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-05.png)



</br>
</br>


## 3.引用

</br>


引用比较简单，符号是 `>`，可以多层嵌套

```
> 青玉案·元夕
>> 辛弃疾
>>>东风夜放花千树。更吹落、星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
>>>蛾儿雪柳黄金缕。笑语盈盈暗香去。众里寻他千百度。蓦然回首，那人却在，灯火阑珊处。
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-06.png)

</br>
</br>




## 4.字体

</br>


字体的格式也有些多，放在一起吧，符号后无空格

```
*斜体字*

**粗体字**

~删除线~

`高亮`

<u>下划线</u>

<span style="border-bottom:2px dashed yellow;">加下划线用的是html代码</span>
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-07.png)



</br>
</br>


## 5.图片/视频/音频

</br>


此方法，适用于图片/视频/音频等，有链接都可以

```
格式：![替代文字](图片地址)
```

注：[ ]中括号的替代文字可留空

```
![小岳岳](https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181204%2F86b842eb7b6648cca02e9254c751041d.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644145498&t=5d9dfddd717d73b1b129cd0cec967f92)
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-08.png)



如果在链接后加`空格双引号接内容`，无地址或失效，这时候引号内的文字就有作用了

```
![小岳岳](https://地址失效后 "我的天哪")
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-09.png)



</br>
</br>



## 6.超链接

</br>




### 6.1 行内式

</br>

```
格式1：[这里填文字](这里是跳转的网址)

格式2：[这里填文字](这里是跳转的网址 "这里填鼠标放上去显示的文字")
```


```
[百度](http://www.baidu.com)

[百度](http://www.baidu.com "百度一下，你就知道")
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-10.png)


</br>



### 6.2 自动连接

</br>

```
格式：<这里填网址>
```

```
<http://www.baidu.com/>
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-11.png)


</br>
</br>



## 7.注释

</br>


注释比较简单，双斜杠，多行注释用 `/*`

```
//单行注释双斜杠


/*
多行注释
*/
```


</br>
</br>





## 8.分割线

</br>


同时使用3个连续的* 或 - 或 _ 表示分割线


```
分隔线1*星号
***

分隔线2-+换行+横杠

---

分隔线3_下划线
___
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-12.png)




</br>
</br>



## 9.代码块

</br>



单行的以一个重音符 ` 开始和结尾

多行的用三个 ``` 开始，

隔一行以```结尾，或者 前面加4个空格

```
` ` `
单行的代码块演示
` ` `

` ` `
多行的代码块
第2行
第3行
` ` `

    多行的代码块
    第2行
    第3行
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-13.png)



</br>
</br>


## 10.锚点

</br>


是一个有难度的用法，需要配合标签使用

```
格式：[说明文字](#要跳转的位置)
```


注意：跳转的位置可以是文字，可以是标题

```
[点我跳转](#青玉案·元夕)



<div id="青玉案·元夕">众里寻他千百度</div>
```

![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-14.png)


这里我用到了div标签，其他标签也是可以的，div标签中间留空，后面就写文字


```
格式：<标签名 id="目标内容">元素内容</标签名>
```


</br>
</br>



## 11.表格

</br>


应该是最难的一项了吧，多用几次就熟练了




* 第一行：表头行，用 `|` 隔开，控制分列


* 第二行：控制行，用 `-` 隔开，控制分行


> 使用冒号 `:` 可控制对齐方式
>
> `:-` 表示左对齐
>
> `.`或 `:-:` 表示中对齐
>
> `-:` 表示右对齐

* 第三行及以下：数据行,用 `|` 隔开


表头行和控制行数量要一致，否则不生效！

```
| 名字 | 性别 | 年龄 | 部门 |
|-|-|-:|-|
| 张三 | 男 |21| 产品 |
| 李四 | 女 |18| 开发 |
| 王二 | 男 |20| 销售 |
```


![](https://ghproxy.com/https://raw.githubusercontent.com/Yiov/notes/main/markdown/markdown-15.png)




