import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import subscript from "markdown-it-sub";
import superscript from "markdown-it-sup";
import footnote from "markdown-it-footnote";
import deflist from "markdown-it-deflist";
import abbreviation from "markdown-it-abbr";
import insert from "markdown-it-ins";
import mark from "markdown-it-mark";
import tasklists from "markdown-it-task-lists";
import hljs from "highlight.js";

const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    try {
      if (lang) { 
        return `<pre class="hljs"><code>${
        hljs.highlight(lang,str).value
      }</code></pre>`;
      }
      console.log(str)
      return `<pre class="hljs"><code>${
        hljs.highlightAuto(str).value
      }</code></pre>`;
    } catch (e) {
      console.error(e);
    }
  },
})
  .use(emoji)
  .use(subscript)
  .use(superscript)
  .use(footnote)
  .use(deflist)
  .use(abbreviation)
  .use(insert)
  .use(mark)
  .use(tasklists);

export default mdParser;
