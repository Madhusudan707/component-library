import { Heading, Description, Snippet } from "../../";
import "./input.css";

export const Input = () => {
  return (
    <>
      <Heading text="Inputs" />
      <Description text="" />
      <div >
        <div className="col">
          <br />
          <div>
            <label for="name">Textbox</label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="default-input"
            />
          </div>
          <div>
            <label htmlFor="option">Select</label>
            <select className="default-select" id="option">
              <option defaultValue="" disabled selected>
                Choose your option{" "}
              </option>
              <option defaultValue="1">Option 1</option>
              <option defaultValue="2">Option 2</option>
              <option defaultValue="3">Option 3</option>
              <option defaultValue="4">Option 4</option>
            </select>
          </div>
          <div>
            <label htmlFor="textarea">Textarea</label>
            <textarea cols="25" rows="4" id="textarea" className="default-textarea"></textarea>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <label className="checkbox" for="checkbox">
              Checkbox
            </label>
          </div>
          <div className="radio">
            <input type="radio" name="gender" id="radioa" />
            <label className="radio" for="radioa">
              Female
            </label>
            <input type="radio" name="gender" id="radiob" />
            <label className="radio" for="radiob">
              Male
            </label>
            <input type="radio" name="gender" id="radioc" />
            <label className="radio" for="radioc">
              Other
            </label>
          </div>

          <button
            className="btn btn-primary"
            type="button"
          >
            Submit
          </button>
        </div>
       
       
              <Snippet code_snippet={`<input type='text' placeholder="Username" class="default-input" />

<select class="default-select" id="option">
	<option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
  	<option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
 </select>

 <input type="checkbox" id="checkbox" />

 <textarea cols="25" rows="4" class="default_textarea"></textarea>

 <div>
 	<input type="checkbox" id="checkbox" />
    <label class="checkbox" for="checkbox"> Checkbox </label>
 </div>          
 
 <div>
      <input type="radio" name="gender" id="radioa" />
      <label for="radioa"> Male </label>

      <input type="radio" name="gender" id="radiob" />
      <label for="radiob"> Female  </label>
 </div>
         
 <button class="btn btn_primary">Submit </button>`} />
       
      </div>

    
    </>
  );
};

