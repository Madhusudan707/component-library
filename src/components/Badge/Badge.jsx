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
                <span className={styles.badge}>1</span>
                <span className={styles.badge}><i className="fa fa-bell"></i></span>
                <span className={styles.badge}><i className="fa fa-inbox"></i></span>
                <span className={styles.badge}>Maddy</span>
            </div>
          
            
            <Snippet code_snippet={`<span class="badge">1</span>

<span class="badge"><i class="fa fa-bell"></i></span>

<span class="badge"><i class="fa fa-inbox"></i></span>

<span class="badge">Maddy</span>`}/>
        </div>
    )
}
export default Badge