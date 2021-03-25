import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './input.module.css'
const Input = () => {
    return (
        <div className={styles.input_main}>
             <Heading text="Input"/>
            <Description text="Avatars are found throughout material design with uses in everything from tables to dialog menus."/>
            <div className={styles.content_block}>
                
                    <input type='text' placeholder="Username" className={styles.default_input} />
               
                    
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=htmlmixed&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=56px&ph=56px&ln=true&fl=1&fm=Fira+Code&fs=14px&lh=154%25&si=false&es=2x&wm=false&code=%2520%253Cinput%2520type%253D%27text%27%2520placeholder%253D%2522Username%2522%2520class%253D%2522default-input%2522%2520%252F%253E"/>
        </div>
    )
}

export default Input