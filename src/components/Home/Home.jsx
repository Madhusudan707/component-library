import React from 'react'
import styles from './home.module.css'
import { Link } from "react-router-dom";
import Snippet from '../Common/Snippet/Snippet'
import {
    AVATAR
  } from "../../config/routing/paths";
const Home = () => {
    return (
        <div className={`${styles.home} ${styles.bg}`} >
            <img src='https://github.com/Madhusudan707/component-library/blob/development/public/bg_home.png?raw=true' />
            {/* <h1><a href="#toggle">View Docs</a> </h1> */}
            {/* <h3 >Initial Setup</h3>
            <h4>
                <a href="/Download/ok.css" className={`${styles.btn} ${styles.btn_secondary}`} download>OK.CSS</a>
                
                <a href="/Download/ok.min.css" className={`${styles.btn} ${styles.btn_secondary}`} download>OK.CSS.MIN</a>
            </h4> */}
            {/* <Snippet code_snippet='https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fok-css.herokuapp.com%252FDownload%252Fok.css%2522%253E%250A%250A%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Ffonts.googleapis.com%252Fcss2%253Ffamily%253DRoboto%253Awght%2540300%2526display%253Dswap%2522%252F%253E%2520%250A%250A%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fcdnjs.cloudflare.com%252Fajax%252Flibs%252Ffont-awesome%252F4.7.0%252Fcss%252Ffont-awesome.css%2522%252F%253E'/> */}

            <iframe
                src="https://carbon.now.sh/embed/2Db5grkU2DiQWSdJUh0j"
                style={{width: "700px", height: "174px", border:"0", transform: "scale(1)",overflow:"hidden"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe>

          
        </div>
    )
}
// style={{width: "700px", height: "214px", border:"0", transform: "scale(1)"}}
export default Home

