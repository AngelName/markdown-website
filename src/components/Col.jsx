import {Col} from "antd";
import React from "react";

export default  function ({children,...other}) {
    let layout = {
        xs:24,
        sm:24,
        md:24,
        lg:12,
    }
    return   <Col {...layout}  {...other}>
        {children}
    </Col>;
}
