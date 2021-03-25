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
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cspan%2520class%253D%27toast%2520t-error%27%253EI%2520am%2520a%2520Toast%2520Error%21%253C%252Fspan%253E%250A%253Cspan%2520class%253D%27toast%2520t-warning%27%253EI%2520am%2520a%2520Toast%2520Warning%21%253C%252Fspan%253E%250A%253Cspan%2520class%253D%27toast%2520t-success%27%253EI%2520am%2520a%2520Toast%2520Success%21%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"/>
        </div>
    )
}

export default Toast