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
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=148%25&si=false&es=2x&wm=false&code=%253Cnav%253E%250A%2520%2520%253Cdiv%2520class%253D%2522nav-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522brand-logo%2522%253ELogo%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253Dnav-ul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%2523%21%2522%253EHome%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%2523%21%2522%253EAbout%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%2522%2523%2522%253EContact%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fnav%253E"/>
        </div>
    )
}

export default Navigation