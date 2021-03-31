import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './toast.module.css'
const Toast = () => {
    return (
        <div className={styles.toast_main}>
            <Heading text="Toast"/>
            <Description text="Toast are an easy way to send alerts to your users"/>
            <div className={styles.content_block}>
                <span className={`${styles.toast} ${styles.t_error}`}>I am a Toast Error!</span>
                <span className={`${styles.toast} ${styles.t_warning}`}>I am a Toast Warning!</span>
                <span className={`${styles.toast} ${styles.t_success}`}>I am a Toast Success!</span>
            </div>
          
            
            <Snippet code_snippet={`<span class='toast t-error'>I am a Toast Error!</span>
<span class='toast t-warning'>I am a Toast Warning!</span>
<span class='toast t-success'>I am a Toast Success!</span>
             `}/>
        </div>
    )
}

export default Toast