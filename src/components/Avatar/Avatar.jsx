import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './avatar.module.css'


const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <Heading text="Avatar"/>
            <Description text="Avatars are found throughout material design with uses in everything from tables to dialog menus."/>
            <div className={styles.content_block}>
            <img src='https://avatars.githubusercontent.com/u/64832695?s=460&u=03e20c3d570af86c78c835405bc0a3feb63aae67&v=4' className={styles.circle} alt='avatar circle'/>
            <img src='https://avatars.githubusercontent.com/u/15929118?s=460&u=23b5f4f1b7ea09f1b6d6362e8a15515716a18a84&v=4' className={styles.circle} alt='avatar circle'/>
            <img src='https://avatars.githubusercontent.com/u/46710420?s=460&u=85e668fd3b1e9c2dad42f5693d283e9049459e07&v=4' className={styles.circle} alt='avatar circle'/>
            <img src='https://avatars.githubusercontent.com/u/65798140?s=460&u=c0443d465becc964772fb0590bd8b16ec45a64c9&v=4' className={styles.circle} alt='avatar circle'/>
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=true&fl=1&fm=Hack&fs=12px&lh=131%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%27image.jpg%27%2520class%253D%27circle%27%2520alt%253D%27my%2520avatar%27%252F%253E"/>
        </div>
    )
}

export default Avatar



