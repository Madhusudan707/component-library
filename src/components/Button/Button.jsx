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

      <Snippet code_snippet={`<button class="btn btn-default"></button>

<button class="btn btn-primary"></button>

<button class="btn btn-secondary"></button>

<button class="btn btn-disabled" disabled></button>

<button class="btn btn-link"></button>`} />
    </div>
  );
};
export default Button;