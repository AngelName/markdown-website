export default function copy(htmlText) {
  document.addEventListener("copy", function handleCopy(e) {
    e.clipboardData.setData("text/html", htmlText);
    e.clipboardData.setData("text/plain", htmlText);
    e.preventDefault(); // default behaviour is to copy any selected text
    document.removeEventListener("copy", handleCopy);
  });
  document.execCommand("copy");
}
