
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
          <button className='bg-gray-500 text-white font-bold p-4 shadow-sm rounded-lg hover:bg-blue-500'>CLICK TO COPY</button>
          </CopyToClipboard>
        </div>
         
      
    )
}


