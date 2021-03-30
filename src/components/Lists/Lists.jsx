import React from 'react'
import Heading from '../Common/Heading/Heading'
import Description from '../Common/Description/Description'
import Snippet from '../Common/Snippet/Snippet'
import styles from './lists.module.css'

const Lists = () => {
    return (
        <div className={styles.list_main}>
            <Heading text="Lists"/>
            <Description text="Lists are continuous, vertical indexes of text or images."/>
            <div className={styles.content_block}>
                <div className={styles.list}>
                    <ul className={styles.list_ul}>
                        <li><a href='#!'><i className="fa fa-bell"></i>Inbox</a></li>
                        <li><a href='#!'><i className="fa fa-shopping-cart"></i>Cart</a></li>
                        <li><a href='#!'><i className="fa fa-shopping-bag"></i>Shopping Bag</a></li>
                        <li><a href='#!'><i className="fa fa-truck"></i>Deliver Van</a></li>
                    </ul>
                </div>
            </div>
          
            
            <Snippet code_snippet="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=sharp&l=auto&ds=false&dsyoff=20px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=11px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Cdiv%2520class%253D%2522list%2522%253E%250A%2509%253Cul%2520class%253D%2522list-ul%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%27%2523%21%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520className%253D%2522fa%2520fa-bell%2522%253E%2526nbsp%253B%253C%252Fi%253EInbox%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%27%2523%21%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520className%253D%2522fa%2520fa-shopping-cart%2522%253E%2526nbsp%253B%253C%252Fi%253ECart%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%2509%2509%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%27%2523%21%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520className%253D%2522fa%2520fa-shopping-bag%2522%253E%2526nbsp%253B%253C%252Fi%253EShopping%2520Bag%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253Cli%253E%253Ca%2520href%253D%27%2523%21%27%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520className%253D%2522fa%2520fa-truck%2522%253E%2526nbsp%253B%253C%252Fi%253EDeliver%2520Van%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%253C%252Fdiv%253E"/>
        </div>
    )
}

export default Lists