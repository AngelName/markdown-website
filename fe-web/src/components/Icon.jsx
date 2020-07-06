import React, {forwardRef} from 'react';
import styles from './Icon.module.sass';


const Icon = (props,ref) => {
    return (
        <div {...props} className={styles.icon} ref={ref}>
            <div className={styles.title}>M</div>
        </div>
    );
};

export default forwardRef(Icon);