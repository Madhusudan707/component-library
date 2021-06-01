import { Heading, Description, Snippet } from "../../";
import "./avatar.css";

export const Avatar = () => {
  return (
    <div className="avatar">
      <Heading text="Avatar" />
      <Description text="Avatars are found throughout material design with uses in everything from tables to dialog menus." />
      <div className={styles.content_block}>
        <img
          src="https://via.placeholder.com/150"
          className={`${styles.circle} ${styles.circle_small}`}
          alt="avatar small"
        />
        <img
          src="https://via.placeholder.com/150"
          className={`${styles.circle} ${styles.circle_medium}`}
          alt="avatar medium"
        />
        <img
          src="https://via.placeholder.com/150"
          className={`${styles.circle} ${styles.circle_large}`}
          alt="avatar large"
        />
      </div>
      <Snippet
        code_snippet={` <img src='https://via.placeholder.com/50' class='circle circle-small' alt='avatar small'/>
 
 <img src='https://via.placeholder.com/50' class='circle circle-medium' alt='avatar small'/>
 
 <img src='https://via.placeholder.com/50' class='circle circle-medium' alt='avatar small'/>`}
      />
    </div>
  );
};
