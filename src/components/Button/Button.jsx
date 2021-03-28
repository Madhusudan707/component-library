import React from "react";
import Heading from "../Common/Heading/Heading";
import Description from "../Common/Description/Description";
import Snippet from "../Common/Snippet/Snippet";
import styles from "./button.module.css";
const Button = () => {
  return (
    <div className={styles.button}>
      <Heading text="Button" />

      <Description text="Buttons allow users to take actions, and make choices, with a single tap." />
      <div className={styles.content_block}>
        <button className={`${styles.btn} ${styles.btn_default} ${styles.gap}`}>
          DEFAULT
        </button>
        <button className={`${styles.btn} ${styles.btn_primary} ${styles.gap}`}>
          PRIMARY
        </button>
        <button
          className={`${styles.btn} ${styles.btn_secondary} ${styles.gap}`}
        >
          SECONDARY
        </button>
        <button
          className={`${styles.btn} ${styles.btn_disabled} ${styles.gap}`}
          disabled
        >
          DISABLED
        </button>
        <button className={`${styles.btn} ${styles.btn_link} ${styles.gap}`}>
          LINK
        </button>
      </div>

      <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-default%2522%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-disabled%2522%2520disabled%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-link%2522%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520" />
    </div>
  );
};
export default Button;