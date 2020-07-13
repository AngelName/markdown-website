import React, {useEffect, useRef, useState} from 'react';
import styles from './style.module.sass';
import Editor from "./Editor";
import hljs from 'highlight.js'
/**
 * @param onChange
 * @param {Editor} editor
 * @param context
 * @param ref
 * @returns {*}
 * @constructor
 */
function EditorElement({onChange,editor, context = ""},ref) {
    const [code,setCode] = useState("");
    useEffect(()=>{
        if(editor){
            editor.onInput((e)=>{
                setCode(editor.getText())
            })
            // setCode(editor.getText())
        }
    },[editor])
    const preCode = hljs.highlight("md",code).value;
    console.log(preCode)
    return (
        <section  className={styles.editor} >
            <textarea value={code}  ref={ref} onChange={onChange}>
            </textarea>
            <pre  aria-hidden={"true"}
    dangerouslySetInnerHTML={{__html: preCode}}/>
        </section>
    );
}

export default React.forwardRef(EditorElement);