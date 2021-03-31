import React from "react";
import Heading from "../Common/Heading/Heading";
import Description from "../Common/Description/Description";
import Snippet from "../Common/Snippet/Snippet";
import styles from "./input.module.css";
const Input = () => {
  return (
    <div className={styles.input_main}>
      <Heading text="Inputs" />
      <Description text="" />
      <div className={styles.content_block}>
        <div className={styles.col}>
          <br />
          <div>
            <label for="name">Textbox</label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              className={styles.default_input}
            />
          </div>
          <div>
            <label for="option">Select</label>
            <select className={styles.default_select} id="option">
              <option value="" disabled selected>
                {" "}
                Choose your option{" "}
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
          <div>
            <label for="textarea">Textarea</label>
            <textarea cols="25" rows="4" id="textarea" className={styles.default_textarea}></textarea>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <label className={styles.checkbox} for="checkbox">
              Checkbox
            </label>
          </div>
          <div className="radio">
            <input type="radio" name="gender" id="radioa" />
            <label className={styles.radio} for="radioa">
              Female
            </label>
            <input type="radio" name="gender" id="radiob" />
            <label className={styles.radio} for="radiob">
              Male
            </label>
            <input type="radio" name="gender" id="radioc" />
            <label className={styles.radio} for="radioc">
              Other
            </label>
          </div>

          <button
            className={`${styles.btn} ${styles.btn_primary}`}
            type="button"
          >
            Submit
          </button>
        </div>
        <div className={styles.col} style={{display:"none"}}>
          <br />
          <div>
            <label for="name">Textbox</label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              className={styles.input_default}
            />
          </div>
          <div>
            <label for="option">Select</label>
            <select className={styles.default_select} id="option">
              <option value="" disabled selected>
                {" "}
                Choose your option{" "}
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </select>
          </div>
          <div>
            <label for="textarea">Textarea</label>
            <textarea cols="40" rows="8" id="textarea" ></textarea>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <label className={styles.checkbox} for="checkbox">
              Checkbox
            </label>
          </div>
          <div className="radio">
            <input type="radio" name="gender" id="radioa" />
            <label className={styles.radio} for="radioa">
              Female
            </label>
            <input type="radio" name="gender" id="radiob" />
            <label className={styles.radio} for="radiob">
              Male
            </label>
            <input type="radio" name="gender" id="radioc" />
            <label className={styles.radio} for="radioc">
              Other
            </label>
          </div>

          <button
            className={`${styles.btn} ${styles.btn_primary}`}
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

    
    </div>
  );
};
export default Input;
