import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Home = () => {
  const code_snippet = `    <link rel="stylesheet" href="https://ok-css.herokuapp.com/Download/ok.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"/> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>`;
  return (
    <div className="flex flex-row home w-full ">
      <div className="flex flex-col  relative  w-2/3">
        <img
          src="/images/ok_logo_home.svg"
          className=" ml-36 mt-16"
          alt="OK CSS LOGO"
        />
        <span className="text-4xl text-red-500 text-center font-bold absolute bottom-8 left-80  ">
          Everthing Gonna Be OK
        </span>
      </div>
      <div className="flex flex-col items-center justify-center text-center w-2/4 mr-8 ">
        <div className="text-2xl ">
          <p>
            OK CSS lets you build web apps faster by providing reusable classes.
          </p>
        </div>
        <div className="mt-16">
          To Quickly get started, place the below code in the head tag of your
          page
          <div className='right-80'>
          <SyntaxHighlighter language="html" style={vs}>
            {code_snippet}
          </SyntaxHighlighter>
          <CopyToClipboard text={code_snippet}>
            <button className='bg-red-500 text-white font-bold p-4 shadow-sm hover:bg-blue-500'>CLICK TO COPY</button>
          </CopyToClipboard>
          </div>
         
          <h1 className="text-5xl mt-16"> Happy Styling!!!</h1>
        </div>
      </div>
    </div>
  );
};
