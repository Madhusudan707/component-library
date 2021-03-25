import React from 'react'
import styles from './sidenav.module.css'
import Navlist from '../Navlist/Navlist'
const Sidenav = () => {
  return <div className={styles.sidenav}>
      <Navlist/>
  </div>;
};

export default Sidenav;
