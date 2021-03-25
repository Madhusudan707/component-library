import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
// import Snippet from '../Common/Snippet/Snippet'
import styles from './textUtilites.module.css'

const Textutilites = () => {
    return (
        <div className={styles.text_utilites}>
            <Heading text="Typography"/>
            <Description text="Use typography to present your design and content as clearly and efficiently as possible."/>
            <div className={styles.content_block}>
                <h1>Heading h1</h1>
                <h2>Heading h2</h2>
                <h3>Heading h3</h3>
                <h4>Heading h4</h4>
                <h5>Heading h5</h5>
                <h6>Heading h6</h6>
            </div>
            {/* <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Hack&fs=12px&lh=131%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%27image.jpg%27%2520class%253D%27circle%27%2520alt%253D%27my%2520avatar%27%252F%253E"/> */}
        </div>
    )
}

export default Textutilites
