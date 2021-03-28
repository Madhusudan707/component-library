import React from 'react'
import './hamburger.css'
const Hamburger = () => {
    return (
       <>
       {/* <div className="hamburger_main"> */}
       <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
        </label>
       {/* </div> */}
       
       </>
    )
}

export default Hamburger
