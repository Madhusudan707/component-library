import React from "react";
import styles from "./home.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AVATAR } from "../../config/routing/paths";
const Home = () => {
  const code_snippet = `<link rel="stylesheet" href="https://ok-css.herokuapp.com/Download/ok.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"/> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>`;
  return (
    <div className={`${styles.home} ${styles.bg}`}>
      <img src="/images/ok_bg.png" alt="big logo" />
      <img src="/images/ok_bg_small2.png" alt="big logo mobile" />
      <div className={styles.snippet_home}>
        <SyntaxHighlighter language="html" style={vs}>
          {code_snippet}
        </SyntaxHighlighter>
        <CopyToClipboard text={code_snippet}>
          <button>Copy to clipboard</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default Home;
