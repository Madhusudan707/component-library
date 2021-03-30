import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './avatar.module.css'


const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <Heading text="Avatar"/>
            <Description text="Avatars are found throughout material design with uses in everything from tables to dialog menus."/>
            <div className={styles.content_block}>
                <img src='https://via.placeholder.com/150' className={`${styles.circle} ${styles.circle_small}`} alt='avatar small'/>
                <img src='https://via.placeholder.com/150' className={`${styles.circle} ${styles.circle_medium}`} alt='avatar medium'/>
                <img src='https://via.placeholder.com/150' className={`${styles.circle} ${styles.circle_large}`} alt='avatar large'/>
            </div>
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cimg%2520src%253D%27https%253A%252F%252Fvia.placeholder.com%252F50%27%2520class%253D%27circle%2520circle-small%27%2520alt%253D%27avatar%2520small%27%252F%253E%250A%2520%250A%253Cimg%2520src%253D%27https%253A%252F%252Fvia.placeholder.com%252F50%27%2520class%253D%27circle%2520circle-medium%27%2520alt%253D%27avatar%2520small%27%252F%253E%250A%250A%253Cimg%2520src%253D%27https%253A%252F%252Fvia.placeholder.com%252F50%27%2520class%253D%27circle%2520circle-medium%27%2520alt%253D%27avatar%2520small%27%252F%253E%250A%2520%2520%2520%2520"/>
        </div>
    )
}

export default Avatar



