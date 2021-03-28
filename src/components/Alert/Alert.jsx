import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './alert.module.css'

const Alert = () => {
    return (
        <div className={styles.alert}>
            <Heading text="Alert"/>
            
            <Description text="An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task."/>
            <div class={styles.content_block}>
                <p className={styles.error}>This is an error alert - check it out!</p>
                <p className={styles.warning}>This is a warning alert - check it out!</p>
                <p className={styles.info}>This is an info alert — check it out!</p>
                <p className={styles.success}>This is a success alert — check it out!</p>
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cspan%2520class%253D%27error%27%253E%253C%252Fspan%253E%250A%250A%253Cspan%2520class%253D%27warning%27%253E%253C%252Fspan%253E%250A%250A%253Cspan%2520class%253D%27info%27%253E%253C%252Fspan%253E%250A%250A%253Cspan%2520class%253D%27success%27%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520"/>
        </div>
    )
}



export default Alert
