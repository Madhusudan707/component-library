import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import styles from './snippet.module.css'
const Snippet = ({code_snippet}) => {
    return (
       
      //    <iframe className={styles.snippet_main}
      //   title="code snipped"
      //   scrolling="no"
      //   src={code_snippet}>
      // </iframe>
        <div className={styles.snippet_main}>
          <SyntaxHighlighter language="html" style={vs}  >
            {code_snippet}
          </SyntaxHighlighter>
          <CopyToClipboard text={code_snippet}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
         
      
    )
}

export default Snippet
