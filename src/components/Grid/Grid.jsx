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
        
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%27col-l1%27%253E1%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l2%27%253E2%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l3%27%253E3%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l4%27%253E4%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l5%27%253E5%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l6%27%253E6%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l7%27%253E7%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l8%27%253E8%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l9%27%253E9%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l10%27%253E10%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l11%27%253E11%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%27col-l12%27%253E12%253C%252Fdiv%253E"/>
        </div>
    )
}

export default Grid