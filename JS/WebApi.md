BOM（浏览器对象原型）
    navigator：userAgent 识别浏览器
    screen： width、height 获取屏幕宽高
    location： href、protocol、pathname、search、hash 
    获取        网址、协议、path、参数、hash
    history： back forward 前进后退功能
-----------------------------------------------------------------
DOM（）
    XML和HTML：XML可扩展的标记语言；HTML是有着既定标准的XML；都是树；
    DOM是JS能识别的HTML结构，一个普通的JS对象或数组。

获取
    ID、class、tagName、CSS选择器

property的获取和修改，是基于DOM对象上的；
attribute的获取和修改，是直接在HTML标签上修改；
attribute的set和get，会触发DOM的查询或者重绘、重排，频繁操作会影响性能

DOM树操作
createElement
appendChild
parentElement
childNodes
removeChild
parentNode

-----------------------------------------------------------------
事件
e.preventDefault()  阻止默认
e.stopPropagation() 阻止冒泡

事件绑定：addEventListener(type,fn)
事件冒泡和捕获：根据DOM结构，冒泡由内往外，捕获由外往内
事件代理：方便的为所有子元素绑定事件，代码简洁，减少浏览器的内存占用

-----------------------------------------------------------------
Ajax
