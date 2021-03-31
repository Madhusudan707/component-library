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
          
            
            <Snippet code_snippet={` <div class="list">
	<ul class="list-ul">
      <li>
        <a href='#!'>
          <i className="fa fa-bell">&nbsp;</i>Inbox
        </a>
      </li>
       <li>
         <a href='#!'>
           <i className="fa fa-shopping-cart">&nbsp;</i>Cart
         </a>		
      </li>
      <li><a href='#!'>
        <i className="fa fa-shopping-bag">&nbsp;</i>Shopping Bag
        </a>
      </li>
      <li><a href='#!'>
        <i className="fa fa-truck">&nbsp;</i>Deliver Van
        </a>
      </li>
    </ul>
 </div>`}/>
        </div>
    )
}

export default Lists