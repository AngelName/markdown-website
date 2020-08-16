import React, { useRef } from "react";
import { Row, Col } from "antd";
import Editor from "./Editor";
import Menu from "./Menu";
import Preview from "./Preview";
import { useState } from "react";
function OnlinePreview() {
  const [code, setCode] = useState("");
  const [previewMode, setPreviewMode] = useState("pc");
  const codeMirror = useRef();

  return (
    <>
      <Row>
        <Col span={24}>
          <Menu
            codeMirror={codeMirror}
            previewMode={previewMode}
            setPreviewMode={setPreviewMode}
          ></Menu>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Editor
            ref={codeMirror}
            codeMirror={codeMirror}
            onChange={setCode}
          ></Editor>
        </Col>
        <Col span={12}>
          <Preview code={code} previewMode={previewMode} />
        </Col>
      </Row>
    </>
  );
}

export default OnlinePreview;
