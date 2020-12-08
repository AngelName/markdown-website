import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import CM from "codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import 'codemirror/theme/idea.css';
import "codemirror/theme/monokai.css";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/mode/css/css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/css-hint";
import "./one-drak-theme.css";
import { PreviewContext } from "..";
CM.prototype.insertAround = function (start, end) {
  var doc = this.getDoc();
  var cursor = doc.getCursor();
  if (doc.somethingSelected()) {
    var selection = doc.getSelection();
    doc.replaceSelection(start + selection + end);
  } else {
    doc.replaceRange(start + end, { line: cursor.line, ch: cursor.ch });
    doc.setCursor({ line: cursor.line, ch: cursor.ch + start.length });
  }
  this.focus();
};
CM.prototype.insertBefore = function (insertion, cursorOffset) {
  var doc = this.getDoc();
  var cursor = doc.getCursor();

  if (doc.somethingSelected()) {
    var selections = doc.listSelections();
    selections.forEach(function (selection) {
      var pos = [selection.head.line, selection.anchor.line].sort();

      for (var i = pos[0]; i <= pos[1]; i++) {
        doc.replaceRange(insertion, { line: i, ch: 0 });
      }

      doc.setCursor({ line: pos[0], ch: cursorOffset || 0 });
    });
  } else {
    doc.replaceRange(insertion, { line: cursor.line, ch: 0 });
    doc.setCursor({ line: cursor.line, ch: cursorOffset || 0 });
  }
  this.focus();
};
let command = {
  del: {
    action: function () {
      this.insertAround("~~", "~~");
    },
  },
  bold: {
    action: function () {
      this.insertAround("**", "**");
    },
  },
  italicize: {
    action: function () {
      this.insertAround("*", "*");
    },
  },
  blockquote: {
    action: function () {
      this.insertBefore("> ", 2);
    },
  },
  link: {
    action: function () {
      this.insertAround("[", "](http://)");
    },
  },
  image: {
    action: function () {
      this.insertBefore("![](http://)", 2);
    },
  },
  unorderedList: {
    action: function () {
      this.insertBefore("* ", 2);
    },
  },
  orderedList: {
    name: "orderedList",
    action: function () {
      this.insertBefore("1. ", 3);
    },
  },
  code: {
    name: "code",
    action: function () {
      let selection = this.getDoc().getSelection();
      console.log(selection, 'fff');
      if (selection === "") { 
        this.insertAround("```\r\n", "\r\n```");
        return;
      }
      if (selection.indexOf("\n") > 0 ) {
        this.insertAround("```\r\n", "\r\n```");
      } else {
        this.insertAround("`", "`");
      }
    },
  },
};
for (let i = 1; i <= 6; i++) {
  command[`h${i}`] = {
    action: function () {
      this.insertBefore(`${"#".replace(i)}`, i);
    },
  };
}
for (let com in command) {
  CM.prototype[com] = command[com].action;
}

function Editor(_, ref) {
  const { state, dispatch } = useContext(PreviewContext);
  const { currentCode } = state;
  return (
    <CodeMirror
      ref={ref}
      value={currentCode}
      onChange={(editor) => {
        dispatch({ type: "currentCode", payload: editor.getDoc().getValue() });
      }}
      height="calc(100vh - 64px - 42px)"
      options={{
        theme: "one-dark",
        keyMap: "sublime",
        mode: "markdown",
      }}
    />
  );
}
export default React.forwardRef(Editor);
