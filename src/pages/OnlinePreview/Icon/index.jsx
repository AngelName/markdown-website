import React from "react";
import styles from "./Icon.module.sass";
import PcIcon from "./PcIcon";
import MobileIcon from "./MobileIcon";
import ThemeIcon from "./ThemeIcon";

function Icon({ name, children, active, ...otherProp }) {
  return (
    <div className={`${styles.icon} ${active && styles.active}`} {...otherProp}>
      {name && (
        <span
          className={`iconfont icon-${name}`}
          style={{
            fontSize: 22,
          }}
        />
      )}
      {children && <span style={{ verticalAlign: "top" }}>{children}</span>}
    </div>
  );
}

export default Icon;

export { PcIcon, MobileIcon, ThemeIcon };
