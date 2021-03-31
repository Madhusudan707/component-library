import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './grid.module.css'
const Grid = () => {
    return (
        <div className={styles.grid_main}>
            <Heading text="Grid"/>
            <Description text="The OKCSS Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."/>
            <div className={styles.content_block}>
                <div className={styles.container}>
                    <div className={`${styles.l1} ${styles.box}`}>
                       <p>1</p> 
                    </div>
                    <div className={`${styles.l2} ${styles.box}`}>
                       <p>2</p>
                    </div>
                    <div className={`${styles.l3} ${styles.box}`}>
                       <p>3</p>
                    </div>
                    <div className={`${styles.l4} ${styles.box}`}>
                       <p>4</p>
                    </div>
                    <div className={`${styles.l5} ${styles.box}`}>
                       <p>5</p>
                    </div>
                    <div className={`${styles.l6} ${styles.box}`}>
                       <p>6</p>
                    </div>
                    <div className={`${styles.l7} ${styles.box}`}>
                       <p>7</p>
                    </div>
                    <div className={`${styles.l8} ${styles.box}`}>
                       <p>8</p>
                    </div>
                    <div className={`${styles.l9} ${styles.box}`}>
                       <p>9</p>
                    </div>
                    <div className={`${styles.l10} ${styles.box}`}>
                       <p>10</p>
                    </div>
                    <div className={`${styles.l11} ${styles.box}`}>
                       <p>11</p>
                    </div>
                    <div className={`${styles.l12} ${styles.box}`}>
                       <p>12</p>
                    </div>
                </div>
            </div>
        
            
            <Snippet code_snippet={`<div class='col-l1'>1</div>
<div class='col-l2'>2</div>
<div class='col-l3'>3</div>
<div class='col-l4'>4</div>
<div class='col-l5'>5</div>
<div class='col-l6'>6</div>
<div class='col-l7'>7</div>
<div class='col-l8'>8</div>
<div class='col-l9'>9</div>
<div class='col-l10'>10</div>
<div class='col-l11'>11</div>
<div class='col-l12'>12</div>`}/>
        </div>
    )
}

export default Grid