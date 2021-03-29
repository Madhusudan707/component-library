import React from 'react'

const Snippet = ({code_snippet}) => {
    return (
       <>
         <iframe
        title="code snipped"
        scrolling="no"
        src={code_snippet}
        style={{
          position: "relative",
          marginTop:"5%",
          width: "42rem",
          height: "18.75rem",
          border:"0",
          transform: "scale(1)",
          // overflow: "hidden",
          background:"none"
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
       </>
    )
}

export default Snippet
