import React from 'react'
import { Layout } from 'antd'
const {Footer} = Layout;
export default function (props) {
    const {style,otherProps} = props;
    const footerStyle = {
        background:'transparent',
        textAlign:'center',
        ...style
    };
    return (
        <Footer style={footerStyle} {...otherProps}>
            Copyright by AngelName @ 2020
        </Footer>
    )
}
