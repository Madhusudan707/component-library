import React from "react";
import { Link } from "react-router-dom";
import styles from "./navlist.module.css";
import {
  HOME,
  AVATAR,
  ALERT,
  BADGE,
  BUTTON,
  CARD,
  IMAGE,
  INPUT,
  LISTS,
  NAVIGATION,
  MODAL,
  RATING,
  SLIDER,
  GRID,
  TEXT_UTILITIES,
  TOAST,
} from "../../config/routing/paths";

const Navlist = () => {
  return (
    <>
      <ul className={styles.navlist_main}>
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={AVATAR}>Avatar</Link>
        </li>
        <li>
          <Link to={ALERT}>Alert</Link>
        </li>
        <li>
          <Link to={BADGE}>Badge</Link>
        </li>
        <li>
          <Link to={BUTTON}>Button</Link>
        </li>
        <li>
          <Link to={CARD}>Card</Link>
        </li>
        <li>
          <Link to={IMAGE}>Image</Link>
        </li>
        <li>
          <Link to={INPUT}>Input</Link>
        </li>
        <li>
          <Link to={LISTS}>Lists</Link>
        </li>
        <li>
          <Link to={NAVIGATION}>Navigation</Link>
        </li>
        <li>
          <Link to={MODAL}>Modal</Link>
        </li>
        <li>
          <Link to={RATING}>Rating</Link>
        </li>
        <li>
          <Link to={SLIDER}>Slider</Link>
        </li>
        <li>
          <Link to={GRID}>Grid</Link>
        </li>
        <li>
          <Link to={TEXT_UTILITIES}>Typography</Link>
        </li>
        <li>
          <Link to={TOAST}>Toast</Link>
        </li>
      </ul>

      {/* <ul className={styles.navlist_mobile}>
                    <li><Link to={HOME}>Home</Link></li>
                    <li><Link to={AVATAR}>Avatar</Link></li>
                    <li><Link to={ALERT}>Alert</Link></li>
                    <li><Link to={BADGE}>Badge</Link></li>
                    <li><Link to={BUTTON}>Button</Link></li>
                    <li><Link to={CARD}>Card</Link></li>
                    <li><Link to={IMAGE}>Image</Link></li>
                    <li><Link to={INPUT}>Input</Link></li>
                    <li><Link to={LISTS}>Lists</Link></li>
                    <li><Link to={NAVIGATION}>Navigation</Link></li>
                    <li><Link to={MODAL}>Modal</Link></li>
                    <li><Link to={RATING}>Rating</Link></li>
                    <li><Link to={SLIDER}>Slider</Link></li>
                    <li><Link to={GRID}>Grid</Link></li>
                    <li><Link to={TEXT_UTILITIES}>Typography</Link></li>
                    <li><Link to={TOAST}>Toast</Link></li>
            </ul> */}

    
    </>
  );
};

export default Navlist;
