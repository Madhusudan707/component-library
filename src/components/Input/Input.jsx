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
       
              <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=11px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%27text%27%2520placeholder%253D%2522Username%2522%2520class%253D%2522default-input%2522%2520%252F%253E%250A%250A%253Cselect%2520class%253D%2522default-select%2522%2520id%253D%2522option%2522%253E%250A%2509%253Coption%2520value%253D%2522%2522%2520disabled%2520selected%253EChoose%2520your%2520option%253C%252Foption%253E%250A%2520%2520%2520%2520%253Coption%2520value%253D%25221%2522%253EOption%25201%253C%252Foption%253E%250A%2520%2520%2509%253Coption%2520value%253D%25222%2522%253EOption%25202%253C%252Foption%253E%250A%2520%2520%2520%2520%253Coption%2520value%253D%25223%2522%253EOption%25203%253C%252Foption%253E%250A%2520%2520%2520%2520%253Coption%2520value%253D%25224%2522%253EOption%25204%253C%252Foption%253E%250A%2520%253C%252Fselect%253E%250A%250A%2520%253Cinput%2520type%253D%2522checkbox%2522%2520id%253D%2522checkbox%2522%2520%252F%253E%250A%250A%2520%253Ctextarea%2520cols%253D%252225%2522%2520rows%253D%25224%2522%2520class%253D%2522default_textarea%2522%253E%253C%252Ftextarea%253E%250A%250A%2520%253Cdiv%253E%250A%2520%2509%253Cinput%2520type%253D%2522checkbox%2522%2520id%253D%2522checkbox%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Clabel%2520class%253D%2522checkbox%2522%2520for%253D%2522checkbox%2522%253E%2520Checkbox%2520%253C%252Flabel%253E%250A%2520%253C%252Fdiv%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%250A%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522gender%2522%2520id%253D%2522radioa%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522radioa%2522%253E%2520Male%2520%253C%252Flabel%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522gender%2522%2520id%253D%2522radiob%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522radiob%2522%253E%2520Female%2520%2520%253C%252Flabel%253E%250A%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%253Cbutton%2520class%253D%2522btn%2520btn_primary%2522%253ESubmit%2520%253C%252Fbutton%253E" />
       
      </div>

    
    </div>
  );
};
export default Input;
