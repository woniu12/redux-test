export const md = '在一些项目中需要用`markdown`来写文章并保存到数据库中，从数据库中读取出来需要转换为`html`格式的代码段才能正确显示文章\n' +
  '\n' +
  '将 **markdown** 转为html有很多种方法，现在我们在react中用 **marked.js** 来实现转换\n' +
  '\n' +
  '### 安装依赖\n' +
  '\n' +
  '> npm install marked --save\n' +
  '\n' +
  '### `marked`使用\n' +
  '\n' +
  '```\n' +
  '// test.js\n' +
  'import React, { Component } from \'react\'\n' +
  'import marked from \'marked\'\n' +
  '\n' +
  'const = \'### test\'\n' +
  '\n' +
  'marked.setOptions({ // marked 设置\n' +
  '  renderer: new marked.Renderer(),\n' +
  '  gfm: true,\n' +
  '  tables: true,\n' +
  '  breaks: true,\n' +
  '  pedantic: false,\n' +
  '  sanitize: false,\n' +
  '  smartLists: true,\n' +
  '  smartypants: false\n' +
  '})\n' +
  '\n' +
  'class Test extends Component {\n' +
  '  render () {\n' +
  '    const strHtml = marked(const)\n' +
  '    return (\n' +
  '      <div>\n' +
  '        <div>\n' +
  '            {strHtml}\n' +
  '        </div>\n' +
  '      </div>\n' +
  '    )\n' +
  '  }\n' +
  '}\n' +
  '\n' +
  'export default Test\n' +
  '\n' +
  '```\n' +
  '\n' +
  '执行上面的代码页面显示的结果\n' +
  '\n' +
  '![](https://user-gold-cdn.xitu.io/2018/10/25/166aa4d8fce3b454?w=230&h=30&f=png&s=1954)\n' +
  '\n' +
  '### dangerouslySetInnerHTML\n' +
  '\n' +
  '我们看到执行`marked(const)`返回的是一个字符串，这时我们要用到 `react` 标签中的一个属性 `dangerouslySetInnerHTML` 相当于vue中的 `v-html`。\n' +
  '\n' +
  '`dangerouslySetInnerHTML`接收的是一个对象键值对\n' +
  '\n' +
  '```\n' +
  '<div dangerouslySetInnerHTML={{__html: markedHtml}}/>\n' +
  '```\n' +
  '\n' +
  '### 代码块样式 `highlight`\n' +
  '\n' +
  '当我们在使用markdown中代码块时发现代码块样式并不是我们希望的有背景色。\n' +
  '\n' +
  '这时我们要用到 `highlight.js` \n' +
  '\n' +
  '```\n' +
  'npm install highlight.js --save\n' +
  '```\n' +
  '\n' +
  '**引用**\n' +
  '\n' +
  '```\n' +
  'import hljs from \'highlight.js/lib/highlight\';\n' +
  'import \'highlight.js/styles/github.css\'\n' +
  'hljs.initHighlightingOnLoad()\n' +
  '```\n' +
  '\n' +
  '**设置marked**\n' +
  '\n' +
  '```\n' +
  'marked.setOptions({\n' +
  '    highlight: function (code, lang) {\n' +
  '        if (lang && hljs.getLanguage(lang)) {\n' +
  '          return hljs.highlight(lang, code, true).value;\n' +
  '        } else {\n' +
  '          return hljs.highlightAuto(code).value;\n' +
  '        }\n' +
  '    }\n' +
  '})\n' +
  '```\n' +
  '\n' +
  '\n' +
  '![](https://user-gold-cdn.xitu.io/2018/10/26/166ae2b03e4fa1af?w=367&h=86&f=png&s=6533)\n' +
  '\n' +
  '这时我们发现`code`标签有类名了\n' +
  '\n' +
  '\n' +
  '\n' +
  'markdown转为html介绍到这里，有错误和更好的方法的大家积极交流，欢迎留言！'