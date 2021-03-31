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
          
            
            <Snippet code_snippet={`<img class="img-card" src="https://via.placeholder.com/200"/>

<img class="img-circle" src="https://via.placeholder.com/200"/>

<img class="img-thumbnail" src="https://via.placeholder.com/200"/>

<img class="img-responsive" src="https://via.placeholder.com/500"/>
    `}/>
        </div>
    )
}
export default Image