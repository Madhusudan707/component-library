import { Heading, Description, Snippet } from "../../";
import "./button.css";
export const Button = () => {
  return (
    <>
      <Heading text="Button" />

      <Description text="Buttons allow users to take actions, and make choices, with a single tap." />
      <div className="mt-4 flex flex-wrap lg:flex-row items-start justify-around w-full">
        
        <button className="btn btn-default  ">DEFAULT</button>
        <button className="btn btn-primary  ">PRIMARY</button>
        <button className="btn btn-secondary ">SECONDARY</button>
        <button className="btn btn-disable  mt-4 lg:mt-0" disabled>
          DISABLED
        </button>
        <button className="btn btn-link gap mt-4 lg:mt-0">LINK</button>
      </div>

      <Snippet
        code_snippet={`<button class="btn btn-default"></button>

<button class="btn btn-primary"></button>

<button class="btn btn-secondary"></button>

<button class="btn btn-disabled" disabled></button>

<button class="btn btn-link"></button>`}
      />
    </>
  );
};
