import React from 'react'
import Heading from "../Common/Heading/Heading";
import Description from "../Common/Description/Description";
import Snippet from "../Common/Snippet/Snippet";
import styles from './modal.module.css'

const Modal = () => {
    return (
        <div className={styles.modal_main}>
            <Heading text="Modal" />
            <Description text="The modal component provides a solid foundation for creating dialogs, popovers, lightboxes." />
            <div className={styles.content_block}>
            <a href="#myModal"><button id='open_modal' className={`${styles.btn} ${styles.btn_primary}`}>Modal</button></a>

                <div id="myModal" className={styles.modal}>
                    <div className={styles.modal_content}>
                        <a href="#close" title="Close" className={styles.modal_close}>X</a>
                        <h2>Modal</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=148%25&si=false&es=2x&wm=false&code=%253Cbutton%2520id%253D%2522open-modal%2522%2520class%253D%2522btn%2520btn-primary%2522%253EOpen%2520Modal%253C%252Fbutton%253E%250A%253Cdiv%2520id%253D%2522myModal%2522%2520class%253D%2522modal%2522%253E%250A%2509%253Cdiv%2520class%253D%2522modal-content%2522%253E%250A%2520%2520%2520%2520%2520%2509%253Ca%2520href%253D%2522%2523close%2522%2520title%253D%2522Close%2522%2520class%253D%2522modal-close%2522%253EX%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2509%253Ch2%253EModal%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cp%253EModal%2520Content%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%253C%252Fdiv%253E" />
        </div>

    )
}

export default Modal