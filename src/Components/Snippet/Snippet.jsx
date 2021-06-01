
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './snippet.css'


export const Snippet = ({code_snippet}) => {
    return (
       
        <div className="snippet-main">
          <SyntaxHighlighter language="html" style={vs}  >
            {code_snippet}
          </SyntaxHighlighter>
          <CopyToClipboard text={code_snippet}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
         
      
    )
}


