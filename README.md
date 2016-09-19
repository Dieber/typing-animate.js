# Typing-Animate.js

##打字动画插件(需JQuery支持)

###文件下载

在本仓库的/dist/js路径下。

###预览和简单介绍

[点击这里](http://www.one-story.cn/typing-animate.html)

###一、快速使用方法

0.在最开始的开始，先将jJQuery.js和typing-animate.js文件引入

```html
<script src="./dist/js/jquery.min.js"></script>
<script src="./dist/js/typing-animate-min.js"></script>

```

1.然后指定一个要实现动画效果的空标签内增加一个类名,这里我们设为typing-ani。

```html
 <div class="typing-ani" id="title"></div>
```

2.使用内置的构造函数新建一个对象，第一个参数为类名，第二个参数为对动画的配置选项（不传则为默认动画效果）

```javascript
 var typing = new Typing("typing-ani",{
 "typingSpeed":50,  //打字速度，数值为时间间隔（ms）
 "cursorSpeed":100, //光标闪烁速度，数值为时间间隔（ms）
 "head":"/* ",      //头部固定文字
 "foot":" */"       //尾部固定文字
 });
```

3.使用链式调用的方式实现想要的效果

```javascript
typing.add("这是一句测试的效果")         //增加文字
.sleep(1000)                           //暂停时间（ms）
.delete(5)                             //删除五个字符，不传参即全部删除
.callback(                             //回调函数，上个任务执行后执行。
    function(){
        $(#typing-ani).css("background-color","red"); 
    }
)
.execute();                   //在最后加上execute即可立即执行动画效果。
```

二、配置选项介绍

您可以通过配置构造函数的第二个参数进行对动画效果的配置，参数如下：

```javascript
typingSpeed       //打字速度，默认50ms
cursorSpeed       //光标闪烁速度，默认50ms
cursorChar        //光标文字，默认为█ 
loop              //动画是否一直循环，默认为false
cursorInfinity    //光标在动画完成后是否继续一直闪烁，默认为false
fade              //光标是否为渐隐渐现效果，默认为false
head              //头部固定文字，默认为无
foot              //尾部固定文字，默认为无
```

三、函数介绍
```javascript
add()            //增加文字内容。
delete()         //删除文字，传入数字即可删除指定个数，不传参即全部删除。
sleep()          //动画暂停，传入数字为暂停时间（ms）。
setting()        //传入一个对象，可在动画的途中进行配置。
    可配置项:
     typingSpeed //打字速度，默认50ms
     cursorSpeed //光标闪烁速度，默认50ms
execute()        //末尾以此函数结束即可开始动画。

```

###License

Released under the MIT license.

