import React from 'react';
import {Col, List, Row} from "antd";
import qcode from '../asset/qcode.png'

const Sponsor = () => {
    let layout = {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
    }
    return (
        <section style={{maxWidth: '1280px', margin: '0 auto', background: '#fff', width: '100%',height:'100%'}}>
            <Row style={{paddingTop: '5vh'}}>
                <Col {...layout} lg={10} style={{textAlign: 'center'}}>
                    <img src={qcode}></img>
                </Col>
                <Col {...layout} lg={10} style={{textAlign: 'center',alignSelf: 'center'}}>
                    <p>如果你感觉它真正的帮助到了您，希望您能给我一些💰上的鼓励。</p>
                    <p>给我github点一个start</p>
                </Col>
            </Row>
            <Row style={{paddingBottom:'30px'}}>
                <Col  {...layout} lg={{span: 14, offset: 8}}>
                    <List
                        header={<Row >
                            <Col span={8}>名称</Col>
                            <Col span={8}>时间</Col>
                            <Col span={8}>金额 ¥ </Col>
                        </Row>}
                        bordered
                        dataSource={[1, 2, 3]}
                        renderItem={item => (
                            <List.Item key={item}>
                                <Row gutter={16} style={{width:'100%'}}>
                                    <Col span={8}>张三</Col>
                                    <Col span={8}>2020-9-01</Col>
                                    <Col span={8}>0.2</Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </section>
    );
};

export default Sponsor;