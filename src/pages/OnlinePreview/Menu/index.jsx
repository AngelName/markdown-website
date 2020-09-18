import React from "react";
import Icon, { MobileIcon, PcIcon } from "../Icon";
import { Divider } from "antd";
import { SkinTwoTone, ToolTwoTone, CopyOutlined } from "@ant-design/icons";
import { panelType, PreviewContext } from "..";
import { useContext } from "react";
import copy from "../../../utils/copy";
import parseStyleToInlineStyle from "../../../utils/parseStyleToInlineStyle";
import mdParser from "../../../utils/mdParse";
import { replaceHighLightStyle } from "../../../utils/replaceStyle";
let highlightStyle = "";
const fetchStyles = async () => {
  await fetch(process.env.PUBLIC_URL + "/highlight/index.json");
  const style = await fetch(
    process.env.PUBLIC_URL + "/highlight/styles/zenburn.css"
  );

  highlightStyle = await style.text();
  replaceHighLightStyle(highlightStyle);
  console.log(highlightStyle);
};
fetchStyles();
const head = [1, 2, 3, 4, 5, 6].map((item) => ({
  icon: `h${item}`,
  command: `h${item}`,
  title: `h${item} 标签`,
}));
const menuGroup = {
  font: [
    {
      icon: "font-bold",
      command: "bold",
      title: "粗体",
    },
    {
      icon: "font-del",
      command: "del",
      title: "删除线",
    },
    {
      icon: "font-italic",
      command: "italicize",
      title: "斜体",
    },
    {
      icon: "quote",
      command: "blockquote",
      title: "引用",
    },
  ],
  head,
  resource: [
    {
      icon: "link",
      command: "link",
      title: "连接",
    },
    {
      icon: "picture",
      command: "image",
      title: "图片",
    },
  ],
  rows: [
    {
      icon: "list",
      command: "unorderedList",
      title: "无序列表",
    },
    {
      icon: "order-list",
      command: "orderedList",
      title: "有序列表",
    },
    {
      icon: "blockcode",
      command: "code",
      title: "代码块",
    },
  ],
};

function objMap(obj, fn) {
  let result = [];
  for (let key in obj) {
    result.push(fn(obj[key], key));
  }
  return result;
}

function Menu() {
  const { state, dispatch } = useContext(PreviewContext);
  const {
    codeEditorRef,
    currentPreviewMode,
    editorPanelModel,
    choiceTheme,
    currentCode,
    currentStyle,
  } = state;
  const renderIcon = ({ icon, command, title }, index) => {
    return (
      <Icon
        title={title}
        key={icon}
        onClick={() => {
          if (codeEditorRef?.current) {
            const { editor } = codeEditorRef.current;
            editor[command]();
          }
        }}
        name={icon}
      />
    );
  };
  return (
    <div
      className="clearfix"
      style={{
        background: "#fff",
        width: "100%",
        borderBottom: "1px solid #aaa",
        fontSize: "22px",
        paddingLeft: "20px",
      }}
    >
      {objMap(menuGroup, (group, key) => {
        return (
          <React.Fragment key={key}>
            {group.map(renderIcon)}
            {key !== "row" && <Divider key={key} type={"vertical"} />}
          </React.Fragment>
        );
      })}
      <div style={{ float: "right" }}>
        <Icon
          onClick={() => {
            const data = parseStyleToInlineStyle(
              `<section
                  id="make"
                >${mdParser.render(currentCode)}
                </section>`,
              highlightStyle + currentStyle
            );
            console.log(data);
            copy(data);
          }}
        >
          <CopyOutlined />
        </Icon>
        <Icon
          onClick={() =>
            dispatch({ type: "choiceTheme", payload: !choiceTheme })
          }
        >
          <SkinTwoTone />
        </Icon>
        <Icon
          onClick={() => {
            dispatch({ type: "choiceTheme", payload: false });
            if (editorPanelModel === panelType.md) {
              dispatch({ type: "editorPanelModel", payload: panelType.style });
            } else {
              dispatch({ type: "editorPanelModel", payload: panelType.md });
            }
          }}
        >
          <ToolTwoTone />
        </Icon>
        <Divider type={"vertical"} />
        <Icon
          title="PC端预览"
          active={currentPreviewMode === "pc"}
          onClick={() => dispatch({ type: "previewPlane", payload: "pc" })}
        >
          <PcIcon />
        </Icon>
        <Icon
          title="移动端预览"
          active={currentPreviewMode === "mobile"}
          onClick={() => dispatch({ type: "previewMode", payload: "mobile" })}
        >
          <MobileIcon />
        </Icon>
      </div>
    </div>
  );
}

export default Menu;
