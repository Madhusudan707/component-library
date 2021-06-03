import { Heading, Description, Snippet } from "../../";
import "./button.css";
export const Button = () => {
  return (
    <>
      <Heading text="Button" />

      <Description text="Buttons allow users to take actions, and make choices, with a single tap." />
      <div className="mt-4 flex flex-row items-start justify-start  w-full">
        <button className="btn btn-default gap">DEFAULT</button>
        <button className="btn btn-primary gap ">PRIMARY</button>
        <button className="btn btn-secondary gap">SECONDARY</button>
        <button className="btn btn-disable gap" disabled>
          DISABLED
        </button>
        <button className="btn btn-link gap">LINK</button>
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
