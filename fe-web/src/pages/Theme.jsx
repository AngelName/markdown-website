import React from 'react';
import {Col, Row} from "antd";
import Card from "../components/Card";

function Theme(props) {


    return (
        <Row style={{maxWidth:'1280px',margin:"20px auto 0 ",justifyContent:"space-between"}} gutter={[16,16]}>
            {Array(24).fill(1).map(item=>{
                return <Col key={item}><Card></Card></Col>
            })}

        </Row>
    );
}

export default Theme;