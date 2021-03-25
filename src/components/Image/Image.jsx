import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './image.module.css'
const Image = () => {
    return (
        <div className={styles.image_main}>
             <Heading text="Image"/>
            <Description text=""/>
            <div className={styles.content_block}>
                <img alt='card' className={`${styles.img_card} ${styles.img_small}`} src='https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>

                <img alt='circle'  className={`${styles.img_circle} ${styles.img_small}`} src='https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>

                <img alt='thumbnail'  className={`${styles.img_thumbnail} ${styles.img_small}`} src='https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>

                <img alt='responsive' className={`${styles.img_responsive} `} src='https://images.unsplash.com/photo-1615933530038-314d91bb1039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'/>
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522img-card%2522%2520src%253D%27sample.jpg%27%252F%253E%250A%253Cimg%2520class%253D%2522img-circle%2522%2520src%253D%27sample.jpg%27%252F%253E%250A%253Cimg%2520class%253D%2522img-thumbnail%2522%2520src%253D%27sample.jpg%27%252F%253E%250A%253Cimg%2520class%253D%2522img-responsive%2522%2520src%253D%27sample.jpg%27%252F%253E"/>
        </div>
    )
}

export default Image