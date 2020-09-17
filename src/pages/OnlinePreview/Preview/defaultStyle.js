export const a = `
/*全局属性*/
#make {
  font-size: 16px;
  color: black;
  padding: 0 10px;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

/*段落*/
#make p {
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  line-height: 26px;
  color: black;
}

/*标题*/
#make h1,
#make h2,
#make h3,
#make h4,
#make h5,
#make h6 {
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 0px;
  font-weight: bold;
  color: black;
}
#make h1 {
  font-size: 24px;
}
#make h2 {
  font-size: 22px;
}
#make h3 {
  font-size: 20px;
}
#make h4 {
  font-size: 18px;
}
#make h5 {
  font-size: 16px;
}
#make h6 {
  font-size: 16px;
}

#make h1 .prefix,
#make h2 .prefix,
#make h3 .prefix,
#make h4 .prefix,
#make h5 .prefix,
#make h6 .prefix {
  display: none;
}

#make h1 .suffix
#make h2 .suffix,
#make h3 .suffix,
#make h4 .suffix,
#make h5 .suffix,
#make h6 .suffix {
  display: none;
}

/*列表*/
#make ul,
#make ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: black;
}
#make ul {
  list-style-type: disc;
}
#make ul ul {
  list-style-type: square;
}

#make ol {
  list-style-type: decimal;
}

#make li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: rgb(1,1,1); /* 只要是纯黑色微信编辑器就会把color这个属性吞掉。。。*/
  font-weight: 500;
}

/*引用*/
#make blockquote {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid rgba(0, 0, 0, 0.4);
  background: rgba(0, 0, 0, 0.05);
  color: #6a737d;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

#make blockquote p {
  margin: 0px;
  color: black;
  line-height: 26px;
}



/*链接*/
#make a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/*加粗*/
#make strong {
  font-weight: bold;
  color: black;
}

/*斜体*/
#make em {
  font-style: italic;
  color: black;
}

/*加粗斜体*/
#make em strong {
  font-weight: bold;
  color: black;
}

/*删除线*/
#make del {
  font-style: italic;
  color: black;
}

/*分隔线*/
#make hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/*代码块*/
#make pre {
  margin-top: 10px;
  margin-bottom: 10px;
}
#make pre code {
  display: -webkit-box;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  -webkit-overflow-scrolling: touch;
}
#make pre code span {
  line-height: 26px;
}

/*行内代码*/
#make p code,
#make li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1e6bb8;
  background-color: rgba(27,31,35,.05);
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/*图片*/
#make img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

/*图片容器*/
#make figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*图片描述文字*/
#make figcaption {
  margin-top: 5px;
  text-align: center;
  color: #888;
  font-size: 14px;
}

/* 图片链接嵌套 */
#make figure a {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 图片链接嵌套，图片解释 */
#make figure a + figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -35px;
  background: rgba(0,0,0,0.7);
  color: white;
  line-height: 35px;
  z-index: 20;
}

/*表格容器 */
#make .table-container{
  overflow-x: auto;
}

/*表格*/
#make table {
  display: table;
  text-align: left;
}
#make tbody {
  border: 0;
}

#make table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
}

#make table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

#make table tr th,
#make table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

#make table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 表格最小列宽4个汉字 */
#make table tr th:nth-of-type(n),
#make table tr td:nth-of-type(n){
  min-width:85px;
}

/** 表格内链接 **/
#make .table-of-contents a {
  border: none;
  color: black;
  font-weight: normal;
}

/** 脚标 **/
#make sub, sup {
  line-height: 0;
}

/* 代码块 */
#make .code-snippet {
  word-wrap: break-word !important;
  font-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0,0,0,0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 20px;
}
#make .code-snippet pre {
  margin-bottom: 10px;
  margin-top: 0px;
}
#make .code-snippet .code-snippet__line-index {
  counter-reset: line;
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
  padding: 16px;
  margin: 0;
}
#make .code-snippet .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
  line-height: 26px;
  color: black;
  margin: 0;
}
#make .code-snippet .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  counter-increment: line;
  content: counter(line);
  display: inline;
  color: rgba(0,0,0,0.3);
}
#make .code-snippet pre {
  overflow-x: auto;
  padding: 16px;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
#make .code-snippet code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
  padding: 0px;
}

#make .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

#make .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

#make .footnote-item {
  display: flex;
}

#make .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#make .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: black;
  word-break:break-all;
  width: calc(100%-50)
}


`;
