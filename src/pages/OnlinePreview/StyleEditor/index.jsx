import React, { useEffect, useRef } from "react";
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

var ExcludedIntelliSenseTriggerKeys = {
  "8": "backspace",
  "9": "tab",
  "13": "enter",
  "16": "shift",
  "17": "ctrl",
  "18": "alt",
  "19": "pause",
  "20": "capslock",
  "27": "escape",
  "33": "pageup",
  "34": "pagedown",
  "35": "end",
  "36": "home",
  "37": "left",
  "38": "up",
  "39": "right",
  "40": "down",
  "45": "insert",
  "46": "delete",
  "91": "left window key",
  "92": "right window key",
  "93": "select",
  "107": "add",
  "109": "subtract",
  "110": "decimal point",
  "111": "divide",
  "112": "f1",
  "113": "f2",
  "114": "f3",
  "115": "f4",
  "116": "f5",
  "117": "f6",
  "118": "f7",
  "119": "f8",
  "120": "f9",
  "121": "f10",
  "122": "f11",
  "123": "f12",
  "144": "numlock",
  "145": "scrolllock",
  "186": "semicolon",
  "187": "equalsign",
  "188": "comma",
  "189": "dash",
  "190": "period",
  "191": "slash",
  "192": "graveaccent",
  "220": "backslash",
  "222": "quote",
};

export default function Editor({ code, mode = "css", onChange }) {
  const codeMirror = useRef();
  useEffect(() => {
    if (codeMirror.current) {
      const { editor, codemirror } = codeMirror.current;
      console.log(codeMirror.current);
      editor.on("keyup", function (editor, event) {
        if (
          !editor.state.completionActive &&
          !ExcludedIntelliSenseTriggerKeys[
            (event.keyCode || event.which).toString()
          ]
        ) {
          codemirror.commands.autocomplete(editor, null, {
            completeSingle: false,
          });
        }
      });
      console.log(codeMirror.current);
    }
  }, []);
  return (
    <CodeMirror
      ref={codeMirror}
      value={code}
      onChange={(editor) => {
        onChange(editor.getDoc().getValue());
      }}
      options={{
        theme: "monokai",
        keyMap: "sublime",
        mode: "style",
      }}
    />
  );
}
