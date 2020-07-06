import React from 'react'
import { Card as AntCard } from 'antd';
import styles from './Card.module.sass';

export default function Card (props) {
    return (
        <AntCard className={styles.card} {...props}
                 cover={
                     <img
                         alt="example"
                         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                     />
                 }
        >
            <div style={{textAlign:'center'}}>
                洁白之熊
            </div>
        </AntCard>
    );
};

