import React from 'react'
import {Layout, Menu,Space} from 'antd';
import './Header.sass';
import {Link} from "react-router-dom";

const {Header} = Layout;


export default function (props) {


    const menuItems = [{
        title: "主题",
        url: "/theme",
    }, {
        title: "在线排版",
        url: "/online",
    },
    //     {
    //     title: "上传主题",
    //     url: "question",
    // },
        {
        title: "常见问题",
        url: "question",
    }, {
        title: "赞助 🎉",
        url: "sponsor",
    }]
    const {pathname} = window.location;
    const hasBoxShadow = pathname === "/";

    return (
        <Header {...props} style={{background:'#fff',zIndex:1,boxShadow:hasBoxShadow&&"0px 0px 5px 0px #0000001f"}}>
            <div className={"header-icon"}>
                <Link to={"/"}><h1>马可</h1></Link>
            </div>
            <div className={"header-menu"}>
                <Space>
                    {menuItems.map(({url,title}) => {
                            return <Link key={url} to={url}>{title}</Link>
                        }
                    )}
                </Space>
            </div>

        </Header>
    )
}
