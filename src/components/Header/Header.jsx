import React from 'react'
import Brand from "../Brand/Brand"
// import HeaderText from '../HeaderText/HeaderText'
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
               <Brand/>
               {/* <HeaderText/> */}
        </div>
    )
}

export default Header
