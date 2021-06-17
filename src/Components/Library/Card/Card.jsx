import { Heading, Description, Snippet } from "../../";
import "./card.css";

export const Card = () => {
  return (
    <>
      <Heading text="Cards" />

      <Description text="Cards contain content about a single subject." />
      <div className="flex flex-row flex-wrap items-center justify-center w-full">
      
        <div className="card">
          <div className="card-title">
            <h4>JavaScript For Web Designer</h4>
          </div>
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="card-img"
            />
          </div>
          <div className="card-content">
            <span> Price : ₹500</span>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>My Workstation</h4>
          </div>
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWN0JTIwamF2YXNjcmlwdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="card-img"
            />
          </div>
          <div className="card-content">
            <span> Price : ₹150000</span>
          </div>
        </div>
        <div className="card">
          <div className="card-title">
            <h4>Balance Encap Shoes</h4>
          </div>
          <div className="card-img">
            <img
              src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="card-img"
            />
          </div>
          <div className="card-content">
            <span> Price : ₹5000</span>
          </div>
        </div>
        </div>
        <Snippet code_snippet={`<div class='card'>
  <div class='card-title'>
    <h4>Card Title</h4>
  </div>
  <div class='card-img'>
    <img src='sample.jpg' alt='sample'/>
  </div>
  <div class='card-content'>
    <span>My Card Content</span>
  </div>
</div>
    `} />
    

     
    </>
  );
};

