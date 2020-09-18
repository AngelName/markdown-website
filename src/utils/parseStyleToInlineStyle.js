import juice from "juice";

export default function parseStyleToInlineStyle(html, css) {
  return juice.inlineContent(html, css);
}
