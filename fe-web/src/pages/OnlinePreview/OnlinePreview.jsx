import React, {useEffect, useRef, useState} from 'react';
import Preview from "./Preview";
import {Row, Col} from "antd";
import ColLayout from "../../components/Col";
import Menu from "./Menu";
import EditorElement from "./EditorElemet";
import styles from './style.module.sass'
import demo from './demo';
import Editor from "./Editor.js";



function OnlinePreview(props) {

    const [context,setContext] = useState(demo);
    /**
     * @type {React.MutableRefObject<HTMLTextAreaElement>}
     */
    const textAreaRef = useRef();


    const [editor,setEditor] = useState();

    useEffect(() => {
        if (textAreaRef.current) {
            setEditor(new Editor(textAreaRef.current,(text)=>{
                setContext(text)
            }));
        }
    }, [])

    return (
            <section className={styles.main}>
                <Row>
                    <Menu editor={editor}/>
               </Row>
                <Row style={{height:'calc(100vh - 84px)'}}>
                    <ColLayout><EditorElement ref={textAreaRef} onChange={(e)=>setContext(e.currentTarget.value)} context={context}/></ColLayout>
                    <ColLayout><Preview context={context}/></ColLayout>
                </Row>
            </section>
    );
}

export default OnlinePreview;