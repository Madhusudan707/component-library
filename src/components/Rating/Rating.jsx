import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './rating.module.css'

const Rating = () => {
    return (
        <div className={styles.rating_main}>
           
            <Heading text="Rating"/>
            <Description text="Use typography to present your design and content as clearly and efficiently as possible."/>
            <div className={`${styles.content_block} ${styles.rating}`}>
                <a href='#rating'>
                    
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
            </a>
               
            </div>
            <Snippet code_snippet={`<div class="rating">
   <a href="#rating">  
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
      <i class="fa fa-star-o"></i>
    </a>
 </div>`}/>
       
            
        </div>
    )
}

export default Rating