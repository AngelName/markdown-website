import React, {useContext} from 'react';
import Icon from "./Icon";
import {Divider} from "antd";
import ThemeIcon from "./ThemeIcon";
import PcIcon from "./PcIcon";
import MobileIcon from "./MobileIcon";

const head = [1, 2, 3, 4, 5, 6].map(item => ({
    icon: `h${item}`,
    command: `h${item}`,
    title: `h${item} 标签`
}))
const menuGroup = {
    font: [
        {
            icon: "font-bold",
            command: "bold",
            title: "粗体"
        },
        {
            icon: "font-del",
            command: "del",
            title: "删除线"
        },
        {
            icon: "font-italic",
            command: "italic",
            title: '斜体'
        },
        {
            icon: "quote",
            command: "blockquote",
            title: '引用'
        },

    ],
    head,
    resource: [
        {
            icon: 'link',
            command: "link",
            title: "连接"
        },
        {
            icon: "picture",
            command: "image",
            title: '图片'
        },
    ],
    rows: [
        {
            icon: "list",
            command: "list",
            title: '代码块'
        },
        {
            icon: "blockcode",
            command: "code",
            title: '代码块'
        },
        {
            icon: "table",
            command: "table",
            title: '表格'
        },
    ]
}

function objMap(obj, fn) {
    let result = [];
    for (let key in obj) {
        result.push(fn(obj[key], key))
    }
    return result;
}

/**
 * @param {Editor} editor
 * @return {*}
 * @constructor
 */
function Menu({editor}) {

    const renderIcon = ({icon, command}, index) => {
        return <Icon key={icon} onClick={
            () => {
                editor.execCommand(command)
            }
        } name={icon}/>
    }
    return (
        <div style={{background: '#fff', width: '100%', borderBottom: '1px solid #aaa',fontSize:'22px', paddingLeft: '20px'}}>
            {objMap(menuGroup, (group, key) => {
                return <React.Fragment key={key}>
                    {group.map(renderIcon)}
                    {key !== 'row' &&<Divider key={key}
                             type={"vertical"}/>}</React.Fragment>
            })}
            <div style={{float:'right'}}>
                <Icon ><ThemeIcon/></Icon> <Divider type={"vertical"}/>
                <Icon><PcIcon/></Icon> <Divider type={"vertical"}/>
                <Icon><MobileIcon/></Icon>
            </div>

        </div>
    );
}

export default Menu;