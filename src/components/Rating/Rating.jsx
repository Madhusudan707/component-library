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
                    
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
                    <i className='fa fa-star-o'></i>
            </a>
               
            </div>
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=148%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522rating%2522%253E%250A%2520%2520%2520%253Ca%2520href%253D%2522%2523rating%2522%253E%2520%2520%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star-o%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star-o%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star-o%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star-o%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fa%2520fa-star-o%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%253C%252Fdiv%253E"/>
       
            
        </div>
    )
}

export default Rating