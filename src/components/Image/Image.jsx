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
                <img alt='card' className={`${styles.img_card} ${styles.img_small}`} src='https://via.placeholder.com/200'/>

                <img alt='circle'  className={`${styles.img_circle} ${styles.img_small}`} src='https://via.placeholder.com/200'/>

               

                <img alt='thumbnail'  className={`${styles.img_thumbnail} ${styles.img_small}`} src='https://via.placeholder.com/200'/>

                <img alt='responsive' className={`${styles.img_responsive} `} src='https://via.placeholder.com/500'/>
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520class%253D%2522img-card%2522%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%252F%253E%250A%250A%253Cimg%2520class%253D%2522img-circle%2522%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%252F%253E%250A%250A%253Cimg%2520class%253D%2522img-thumbnail%2522%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F200%2522%252F%253E%250A%250A%253Cimg%2520class%253D%2522img-responsive%2522%2520src%253D%2522https%253A%252F%252Fvia.placeholder.com%252F500%2522%252F%253E%250A%2520%2520%2520%2520"/>
        </div>
    )
}
export default Image