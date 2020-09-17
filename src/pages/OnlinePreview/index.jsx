import React, { useRef } from "react";
import { Row, Col } from "antd";
import Editor from "./Editor";
import Menu from "./Menu";
import Preview from "./Preview";
import StyleEditor from "./StyleEditor";
import { useState } from "react";
import EditorPanel from "./EditorPanel";
import { a as defaultStyle } from "./Preview/defaultStyle";

export const panelType = {
  md: 0,
  theme: 1,
  style: 2,
};
function OnlinePreview() {
  const [code, setCode] = useState("");
  const [previewMode, setPreviewMode] = useState("pc");
  const codeMirror = useRef();
  const [editorPanel, setEditorPanel] = useState(panelType.md);
  const [currentStyle, setCurrentStyle] = useState(defaultStyle);
  return (
    <>
      <Row>
        <Col span={24}>
          <Menu
            codeMirror={codeMirror}
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
            editorPanel={editorPanel}
            setEditorPanel={setEditorPanel}
          ></Menu>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <EditorPanel active={editorPanel === panelType.md}>
            <Editor
              ref={codeMirror}
              codeMirror={codeMirror}
              onChange={setCode}
            ></Editor>
          </EditorPanel>
          <EditorPanel active={editorPanel === panelType.theme}>
            <StyleEditor
              ref={codeMirror}
              codeMirror={codeMirror}
              code={currentStyle.toString()}
              onChange={setCurrentStyle}
            ></StyleEditor>
          </EditorPanel>
          {/* <EditorPanel active={editorPanel === panelType.theme}>
            123
          </EditorPanel> */}
        </Col>
        <Col span={12}>
          <Preview code={code} style={currentStyle} previewMode={previewMode} />
        </Col>
      </Row>
    </>
  );
}

export default OnlinePreview;
