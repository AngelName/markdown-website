function replaceStyle(id, style) {
  let styleElement = document.getElementById(id);
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
  } else {
    styleElement.textContent = style;
  }
}

export function replaceHighLightStyle(style) {
  replaceStyle("hightStyle", style);
}
export function replaceThemeStyle(style) {
  replaceStyle("themeStyle", style);
}
