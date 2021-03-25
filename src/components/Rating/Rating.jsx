import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './rating.module.css'

const Rating = () => {
    return (
        <div className={styles.rating_main}>
           
            <Heading text="Typography"/>
            <Description text="Use typography to present your design and content as clearly and efficiently as possible."/>
            <div className={`${styles.content_block} ${styles.rating}`}>
                <a href='#rating'>
                    
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
            </a>
               
            </div>
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27rating%27%253E%250A%2520%2520%253Ci%2520className%253D%27fa%2520fa-star%27%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520className%253D%27fa%2520fa-star%27%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520className%253D%27fa%2520fa-star%27%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520className%253D%27fa%2520fa-star%27%253E%253C%252Fi%253E%250A%2520%2520%253Ci%2520className%253D%27fa%2520fa-star%27%253E%253C%252Fi%253E%250A%253C%252Fdiv%253E"/>
       
            
        </div>
    )
}

export default Rating
