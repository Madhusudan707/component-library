import {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './snippet.css'


export const Snippet = ({code_snippet}) => {
  const [btnText,setBtnText] = useState("CLICK TO COPY")
  const [btnColor,setBtnColor] = useState("bg-gray-500")
  const copyAlert=()=>{
    setBtnText("SNIPPET COPIED!!")
    setBtnColor("bg-blue-500")
    setTimeout(()=>{
      setBtnText("CLICK TO COPY")
      setBtnColor("bg-gray-500")
    },1000)
  }
    return (
       
        <div className="snippet-main">
          <SyntaxHighlighter language="html" style={vs}  >
            {code_snippet}
          </SyntaxHighlighter>
          <CopyToClipboard text={code_snippet}>
          <button className={` ${btnColor} text-white font-bold p-4 shadow-sm cursor-pointer rounded-lg hover:bg-blue-500 focus:outline-none`} onClick={copyAlert}>{btnText}</button>
          </CopyToClipboard>
        </div>
         
      
    )
}


