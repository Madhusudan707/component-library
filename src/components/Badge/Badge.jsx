import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './badge.module.css'
const Badge = () => {
    return (
        <div className={styles.badge_main}>
            <Heading text="Badge"/>
            <Description text="Badges can notify you that there are new or unread messages or notifications."/>
            <div className={styles.content_block}>
                <span className={styles.badge}>1</span>&nbsp;&nbsp;
                <span className={styles.badge}><i className="fa fa-bell"></i></span>&nbsp;&nbsp;
                <span className={styles.badge}><i className="fa fa-inbox"></i></span>&nbsp;&nbsp;
                <span className={styles.badge}>Maddy</span>&nbsp;&nbsp;
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cspan%2520class%253D%2522badge%2522%253E1%253C%252Fspan%253E%250A%253Cspan%2520class%253D%2522badge%2522%253E%253Ci%2520class%253D%2522fa%2520fa-bell%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%253Cspan%2520class%253D%2522badge%2522%253E%253Ci%2520class%253D%2522fa%2520fa-inbox%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%253Cspan%2520class%253D%2522badge%2522%253EMaddy%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"/>
        </div>
    )
}

export default Badge