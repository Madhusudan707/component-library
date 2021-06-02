import { Heading, Description, Snippet } from "../../";

import "./badge.css";
export const Badge = () => {
  return (
    <>
      <Heading text="Badge" />
      <Description text="Badges can notify you that there are new or unread messages or notifications." />
      <div className=" mt-8 flex flex-row items-center justify-around w-full ">
        <div className="wrapper">
          <i className="fas fa-shopping-cart fa-4x"></i>
          <div className="badge">
            <span className="content">1</span>
          </div>
        </div>
        <div className="wrapper">
          <i className="fas fa-bell fa-4x"></i>
          <div className="badge">
            <span className="content">1</span>
          </div>
        </div>
        <div className="wrapper">
          <i className="fas fa-inbox fa-4x"></i>
          <div className="badge">
            <span className="content">1</span>
          </div>
        </div>
      </div>

      <Snippet
        code_snippet={`<div className="badge">
    <i class="fas fa-inbox fa-4x"></i>
    <div className="badge">
        <span className="content">1</span>
    </div>
</div>`}
      />
    </>
  );
};
