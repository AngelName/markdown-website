import React, {useContext} from 'react';
import Icon from "./Icon";
import {EditorContext} from "./OnlinePreview";

const head = [1, 2, 3, 4, 5, 6].map(item => ({
    icon: `h${item}`,
    command: `h${item}`,
    title: `h${item} 标签`
}))
const menuGroup = {
    font:[
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
            command: "quote",
            title:'引用'
        }
    ],
    head,
}

function objMap(obj,fn) {
    let result = [];
    for(let key in obj){
        result.push(fn(obj[key],key))
    }
    return result;
}

/**
 * @param {Editor} editor
 * @return {*}
 * @constructor
 */
function Menu({editor}) {

    const renderIcon =({icon,command},index) => {
        return <Icon onClick={
            ()=>{
                editor.execCommand(command)
            }
        } name={icon}/>
    }
    return (
        <div style={{background:'#fff',width:'100%',borderBottom:'1px solid #aaa',paddingLeft:'20px'}}>
            {objMap(menuGroup,(group)=>{
                return group.map(renderIcon)
            })}
        </div>
    );
}

export default Menu;