import React, {useEffect, useRef, useState} from 'react';
import Preview from "./Preview";
import {Row} from "antd";
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
                <Row >
                    <ColLayout style={{height:'calc(100vh - 180px)',overflow:'auto',  borderRight: "1px solid #ccc"
                    }}>
                        <EditorElement ref={textAreaRef} editor={editor} onChange={(e)=>setContext(e.currentTarget.value)} context={context}/></ColLayout>
                    <ColLayout style={{height:'calc(100vh - 180px)',overflow:'auto'}}><Preview context={context}/></ColLayout>
                </Row>
            </section>
    );
}

export default OnlinePreview;