# 盒子模型
页面的所有元素都看作一个矩形盒子，这个盒子包含 ：内容+内边距+边框+外边距
### 标准模型和ie模型
    box-sizing
        content-box 标准盒子 
            width和height分别应用到元素的内容，在宽度高度之外绘制元素的内边距、边框、外边距
        border-box  ie盒子  
            width和height决定了元素的边框盒，为元素指定的任何内边距和边框都将在以设定的宽度高度内进行绘制，通过以设定的宽度高度分别减去外边距、边框、内边距才能得到内容的宽度高度
        inherit
            从父元素继承box-sizing
# BFC
BFC（Block Formatting Context）块级格式化上下文，是 Web 页面中盒模型布局的 CSS 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。
### BFC形成条件
    1.浮动元素（float除none以外的值）  
    2.定位元素（position为absolute、fixed）  
    3.display为inline-block、table-cell、table-caption  
    4.overflow除了visible以外的值（hidden，auto，scroll）
### BFC特性
    1.内部的 Box 会在垂直方向上一个接一个的放置；
    2.垂直方向上的距离由margin 决定；（解决外边距重叠问题）
    3.bfc 的区域不会与 float 的元素区域重叠；（防止浮动文字环绕）
    4.计算 bfc 的高度时，浮动元素也参与计算；（清除浮动）
    5.bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素；
