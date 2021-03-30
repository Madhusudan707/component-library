import React from 'react'
import styles from './snippet.module.css'
const Snippet = ({code_snippet}) => {
    return (
       <>
         <iframe className={styles.snippet_main}
        title="code snipped"
        scrolling="no"
        src={code_snippet}
      ></iframe>
       </>
    )
}

export default Snippet
