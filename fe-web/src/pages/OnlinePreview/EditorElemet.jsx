import React, {useEffect, useRef, useState} from 'react';
import styles from './style.module.sass';
import Editor from "./Editor";


function EditorElement({onChange, context = ""},ref) {

    return (
        <section  className={styles.editor} >
            <textarea ref={ref} onChange={onChange}/>
        </section>
    );
}

export default React.forwardRef(EditorElement);