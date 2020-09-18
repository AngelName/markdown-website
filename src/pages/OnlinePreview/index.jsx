import React, { useRef } from "react";
import { Row, Col } from "antd";
import CodeEditor from "./CodeEditor";
import Menu from "./Menu";
import Preview from "./Preview";
import StyleEditor from "./StyleEditor";
import EditorPanel from "./EditorPanel";
import { a as defaultStyle } from "./Preview/defaultStyle";
import ThemePreview from "./ThemePreview";
import { useReducer } from "react";

export const panelType = {
  md: 0,
  theme: 1,
  style: 2,
};

const initialState = {
  currentCode: "",
  currentStyle: "",
  currentPreviewMode: "pc",
  editorPanelModel: panelType.md,
  codeEditorRef: null,
  styleEditorRef: null,
  previewRef: null,
  choiceTheme: false,
};

function reducer(state, action) {
  switch (action.type) {
    case action.type.indexOf("init") !== -1:
      console.debug("init..." + action.type);
      return { ...state, ...action.payload };
    case "currentPreviewMode":
      return { ...state, currentPreviewMode: action.payload };
    case "choiceTheme":
      return { ...state, choiceTheme: action.payload };
    case "currentCode":
      return { ...state, currentCode: action.payload };
    default:
      return { ...state, [action.type]: action.payload };
  }
}
export const PreviewContext = React.createContext({
  state: initialState,
  dispatch: (/**@type {{type:string,payload:any}}*/ action) => {},
});

function OnlinePreview() {
  const codeEditorRef = useRef();
  const styleEditorRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    currentStyle: defaultStyle,
    codeEditorRef,
    styleEditorRef,
  });
  const { editorPanelModel, choiceTheme } = state;

  return (
    <PreviewContext.Provider value={{ state, dispatch }}>
      <Row>
        <Col span={24}>
          <Menu />
        </Col>
      </Row>
      <EditorPanel style={{ zIndex: "120" }} active={choiceTheme}>
        <ThemePreview />
      </EditorPanel>
      <Row>
        <Col span={12}>
          <EditorPanel active={editorPanelModel === panelType.md}>
            <CodeEditor ref={codeEditorRef}></CodeEditor>
          </EditorPanel>
          <EditorPanel active={editorPanelModel === panelType.style}>
            <StyleEditor ref={styleEditorRef}></StyleEditor>
          </EditorPanel>
        </Col>
        <Col span={12}>
          <Preview />
        </Col>
      </Row>
    </PreviewContext.Provider>
  );
}

export default OnlinePreview;
