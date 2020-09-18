import React from "react";
import "highlight.js/styles/atom-one-light.css";
import classNames from "classnames";
import styles from "./index.module.sass";
import { useEffect } from "react";
import mdParser from "../../../utils/mdParse";
import { useContext } from "react";
import { PreviewContext } from "..";
import { replaceThemeStyle } from "../../../utils/replaceStyle";

function Preview() {
  const { state } = useContext(PreviewContext);
  const { currentCode, currentStyle, currentPreviewMode } = state;
  const boxClass = classNames(styles.common, {
    [styles.mobile]: currentPreviewMode === "mobile",
    [styles.pc]: currentPreviewMode === "pc",
  });

  useEffect(() => {
    replaceThemeStyle(currentStyle);
  }, [currentStyle]);

  return (
    <section
      id="make"
      className={boxClass}
      dangerouslySetInnerHTML={{ __html: mdParser.render(currentCode) }}
    ></section>
  );
}

export default Preview;
