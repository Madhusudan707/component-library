import { Heading, Description, Snippet } from "../../";
import "./alert.css";

export const Alert = () => {
  return (
    <div className="shadow-md rounded-lg mt-4 p-4 border-t-4 border-blue-500 common">
      <Heading text="Alert" />

      <Description text="An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task." />
      <div className=" mt-4  ">
        <p className="error  mb-4">This is an error alert</p>
        <p className="warning mb-4">This is a warning alert</p>
        <p className="info mb-4">This is an info alert</p>
        <p className="success">This is a success alert</p>
      </div>

      <Snippet
        code_snippet={`<span class='error'></span>

<span class='warning'></span>

<span class='info'></span>

<span class='success'></span>`}
      />
    </div>
  );
};
