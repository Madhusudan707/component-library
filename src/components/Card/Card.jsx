import React from "react";
import Heading from "../Common/Heading/Heading";
import Description from "../Common/Description/Description";
import Snippet from "../Common/Snippet/Snippet";
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.card_main}>
      <Heading text="Cards" />

      <Description text="Cards contain content and actions about a single subject." />
      <div className={styles.content_block}>
      
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h4>JavaScript For Web Designer</h4>
          </div>
          <div className={styles.card_img}>
            <img
              src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="card_img"
            />
          </div>
          <div className={styles.card_content}>
            <span> Price : ₹500</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h4>My Workstation</h4>
          </div>
          <div className={styles.card_img}>
            <img
              src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWN0JTIwamF2YXNjcmlwdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="card_img"
            />
          </div>
          <div className={styles.card_content}>
            <span> Price : ₹150000</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h4>Balance Encap Shoes</h4>
          </div>
          <div className={styles.card_img}>
            <img
              src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="card_img"
            />
          </div>
          <div className={styles.card_content}>
            <span> Price : ₹5000</span>
          </div>
        </div>
        </div>
        <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27card%27%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27card-title%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253ECard%2520Title%253C%252Fh4%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27card-img%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%27sample.jpg%27%2520alt%253D%27sample%27%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%27card-content%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253EMy%2520Card%2520Content%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%2520%2520%2520%2520" />
    

     
    </div>
  );
};

export default Card;
