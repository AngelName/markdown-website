import React from "react";
import styles from './Icon.module.sass';

function Icon({name,...otherProp}) {
    return <div className={styles.icon} {...otherProp}>
        <span className={`iconfont icon-${name}`} style={{fontSize: 22}}/>
    </div>
}

export default Icon;