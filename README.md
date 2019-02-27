# innersvg
基于部分浏览器不支持svg的innerHTML属性的补充方法。Some browsers do not support the supplementary method of innerHTML attributes of svg.

****
### 作者:心叶
### 邮箱:yelloxing@gmail.com
****

如何使用？
--------------------------------------
如果你开发的是一个web项目，直接在页面引入即可：

```html
<script src="./innersvg.js" type="text/javascript"></script>
```

然后调用

```js
// target表示目标结点，svgstring表示需要插入的svg字符串
innerSVG.set(target,svgstring);
```

如果你想通过npm方式管理，首先你需要通过命令行安装：

```bash
npm install --save innersvg
```

安装好了，然后调用：
```js
import innerSVG from 'innersvg';
innerSVG.set(target,svgstring);
```

### 免责声明

*   项目中部分数据（如图片等）来自互联网，如果侵犯到对应权益者请联系我们，方便我们及时删除！
*   本项目保留贡献者全部权利，发生的任何纠纷，本项目作者和维护人概不负责，如有侵权，请及时和我们取得联系。
