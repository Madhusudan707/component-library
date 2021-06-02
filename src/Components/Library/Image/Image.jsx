import { Heading, Description, Snippet } from "../../";
import "./image.css";
export const Image = () => {
  return (
    <>
      <Heading text="Image" />
      <Description text="" />
      <div className='flex flex-row w-96 h-52 p-4'>
        <img
          alt="card"
          className="img-card img-small mr-2"
          src="https://via.placeholder.com/200"
        />

        <img
          alt="circle"
          className="img-circle img-small mr-2"
          src="https://via.placeholder.com/200"
        />

        <img
          alt="thumbnail"
          className="img-thumbnail img-small mr-2"
          src="https://via.placeholder.com/200"
        />

        <img
          alt="responsive"
          className="img-responsive mr-2"
          src="https://via.placeholder.com/500"
        />
      </div>

      <Snippet
        code_snippet={`<img class="img-card" src="https://via.placeholder.com/200"/>

<img class="img-circle" src="https://via.placeholder.com/200"/>

<img class="img-thumbnail" src="https://via.placeholder.com/200"/>

<img class="img-responsive" src="https://via.placeholder.com/500"/>
    `}
      />
    </>
  );
};

