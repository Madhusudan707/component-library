import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.nav_main}>
            <Heading text="Navbar"/>
            <Description text="The NavBar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions."/>
            <div className={styles.content_block}>
                <nav>
                    <div className={styles.nav_wrapper}>
                        <a href="Logo" className={styles.brand_logo}>Logo</a>
                        <ul className={styles.nav_ul}>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
          
            
            <Snippet code_snippet={`<nav>
  <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul class=nav-ul>
          <li><a href="#!">Home</a></li>
          <li><a href="#!">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </div>
</nav>`}/>
        </div>
    )
}

export default Navigation