import React, { useContext, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/mode/css/css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/css-hint";
import { PreviewContext } from "..";

var ExcludedIntelliSenseTriggerKeys = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "ctrl",
  18: "alt",
  19: "pause",
  20: "capslock",
  27: "escape",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  45: "insert",
  46: "delete",
  51: "#",
  91: "left window key",
  92: "right window key",
  93: "select",
  107: "add",
  109: "subtract",
  110: "decimal point",
  111: "divide",
  112: "f1",
  113: "f2",
  114: "f3",
  115: "f4",
  116: "f5",
  117: "f6",
  118: "f7",
  119: "f8",
  120: "f9",
  121: "f10",
  122: "f11",
  123: "f12",
  144: "numlock",
  145: "scrolllock",
  186: "semicolon",
  187: "equalsign",
  188: "comma",
  189: "dash",
  190: "period",
  191: "slash",
  192: "graveaccent",
  220: "backslash",
  222: "quote",
};
for (let key = 0; key <= 9; key++) {
  ExcludedIntelliSenseTriggerKeys[`${key}`] = key;
}
function StyleEditor(_, ref) {
  const { state, dispatch } = useContext(PreviewContext);
  const { currentStyle } = state;
  useEffect(() => {
    if (ref.current) {
      const { editor, codemirror } = ref.current;
      editor.on("keyup", function (editor, event) {
        if (
          !editor.state.completionActive &&
          !ExcludedIntelliSenseTriggerKeys[
            (event.keyCode || event.which).toString()
          ] &&
          !ExcludedIntelliSenseTriggerKeys[event.key.toString()]
        ) {
          var doc = editor.getDoc();
          var { line } = doc.getCursor();
          var lineText = doc.getLine(line);
          if (lineText && !/#|\(|\)/g.test(lineText)) {
            codemirror.commands.autocomplete(editor, null, {
              completeSingle: false,
            });
          }
        }
      });
    }
  }, [ref]);
  return (
    <CodeMirror
      ref={ref}
      value={currentStyle}
      onChange={(editor) =>
        dispatch({ type: "currentStyle", payload: editor.getDoc().getValue() })
      }
      height="calc(100vh - 64px - 42px)"
      options={{
        theme: "monokai",
        keyMap: "sublime",
        mode: "css",
      }}
    />
  );
}
export default React.forwardRef(StyleEditor);
