import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './slider.module.css'

const Slider = () => {
    return (
        <div className={styles.slider_main}>
            <Heading text="Slider"/>
            <Description text="Sliders allow users to make selections from a range of values."/>
            <div className={styles.content_block}>
                <div className={styles.container}>
                    <p><input type="range" min="0" max="100" /></p>
                </div>
            </div>
        
            
            <Snippet code_snippet={`<p><input type="range" min="0" max="100"/></p>`}/>
        </div>
    )
}

export default Slider