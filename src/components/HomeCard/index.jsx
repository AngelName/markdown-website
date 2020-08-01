import React from 'react'
import { Card } from 'antd';
import styles from './Card.module.sass';

export default function (props) {
    return (
        <Card className={styles.card} {...props}>
            {props.children}
        </Card>
    );
};

