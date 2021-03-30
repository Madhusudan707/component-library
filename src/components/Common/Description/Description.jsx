import React from 'react'
import styles from './description.module.css'
const Description = ({text}) => {
    return (
       <>
        <h4 className={styles.description} >{text}</h4>
       </>
            
        
    )
}

export default Description
