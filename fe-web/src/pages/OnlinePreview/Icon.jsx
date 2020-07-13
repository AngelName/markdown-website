import React from "react";
import styles from './Icon.module.sass';

function Icon({name, children, ...otherProp}) {
    return <div className={styles.icon} {...otherProp}>
        {name && <span className={`iconfont icon-${name}`} style={{
            fontSize: 22
        }}/>}
        {children && <span style={{verticalAlign: 'top'}}>{children}</span>}
    </div>
}

export default Icon;