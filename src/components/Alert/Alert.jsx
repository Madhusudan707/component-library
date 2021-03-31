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
            <div className={styles.content_block}>
                <p className={styles.error}>This is an error alert - check it out!</p>
                <p className={styles.warning}>This is a warning alert - check it out!</p>
                <p className={styles.info}>This is an info alert — check it out!</p>
                <p className={styles.success}>This is a success alert — check it out!</p>
            </div>
          
            
            <Snippet code_snippet={`<span class='error'></span>

<span class='warning'></span>

<span class='info'></span>

<span class='success'></span>`}/>
        </div>
    )
}



export default Alert
