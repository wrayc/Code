Promise
    3个状态：pending，fulfilled，rejected
    2个过程：pending=>fulfilled(resolve); pending=>rejected(reject)
    1个方法：then();catch()

-----------------------------------------------------------------
then和catch正常返回状态为resolved的Promise，里面有报错则返回状态为rejected的Promise

resolved => then回调
rejected => catch回调

async、await：对Promise的补充，解决callback hell
一句话：使用同步语法，解决异步回调函数和回调地狱

async函数返回的是Promise对象
await相当于Promise的then()方法，await后面的代码可以看作callback，即异步
try{}catch{}相当于Promise的catch()方法
-----------------------------------------------------------------
异步同步
一句话：异步不会阻塞后面程序的运行，同步则会停下来等待执行，等待会影响性能
JS是单线程运行，异步主要处理Ajax、图片加载、定时器。

-----------------------------------------------------------------
宏任务Macro Task（setTimeout、setInterval、Ajax，DOM）
微任务Micro Task（promise,async/await）
宏任务的内容是浏览器规定，微任务的内容是ES6语法规定
微任务执行时机在宏任务前，微任务在DOM渲染前触发，宏任务在DOM渲染后触发
-----------------------------------------------------------------
EventLoop和DOM渲染
    JS是单线程，和DOM共用一个渲染
    JS在执行时，会留一个时机给DOM去渲染
    每次Call Stack清空时，即同步代码执行完，都是DOM重新渲染的机会，DOM结构如果发生
改变则重新渲染
    再次触发EventLoop
