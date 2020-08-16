import React from "react";
import Icon, { MobileIcon, PcIcon, ThemeIcon } from "./Icon";
import { Divider } from "antd";
import { panelType } from ".";

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

function Menu({
  codeMirror,
  previewMode,
  editorPanel,
  setPreviewMode,
  setEditorPanel,
}) {
  const renderIcon = ({ icon, command, title }, index) => {
    return (
      <Icon
        title={title}
        key={icon}
        onClick={() => {
          if (codeMirror.current) {
            const { editor } = codeMirror.current;
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
            if (editorPanel === panelType.md) {
              setEditorPanel(panelType.theme);
            } else {
              setEditorPanel(panelType.md);
            }
          }}
        >
          <ThemeIcon />
        </Icon>
        <Divider type={"vertical"} />
        <Icon
          title="PC端预览"
          active={previewMode === "pc"}
          onClick={() => {
            setPreviewMode("pc");
          }}
        >
          <PcIcon />
        </Icon>
        <Icon
          title="移动端预览"
          active={previewMode === "mobile"}
          onClick={() => {
            setPreviewMode("mobile");
          }}
        >
          <MobileIcon />
        </Icon>
      </div>
    </div>
  );
}

export default Menu;
