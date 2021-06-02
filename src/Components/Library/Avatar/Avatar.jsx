import { Heading, Description, Snippet } from "../../";
import "./avatar.css";

export const Avatar = () => {
  return (
    <>
      <Heading text="Avatar" />
      <Description text="An avatar (also known as a profile picture or user image) is a graphical representation of a user or the user's character or persona." />
      <div className="content-block flex flex-row items-center ">
        <img
          src="https://via.placeholder.com/150"
          className="circle circle-small"
          alt="avatar small"
        />
        <img
          src="https://via.placeholder.com/150"
          className="circle circle-medium"
          alt="avatar medium"
        />
        <img
          src="https://via.placeholder.com/150"
          className="circle circle-large"
          alt="avatar large"
        />
      </div>
      <Snippet
        code_snippet={` <img src='https://via.placeholder.com/50' class='circle circle-small' alt='avatar small'/>
 
 <img src='https://via.placeholder.com/50' class='circle circle-medium' alt='avatar medium'/>
 
 <img src='https://via.placeholder.com/50' class='circle circle-medium' alt='avatar large'/>`}
      />
    </>
  );
};
