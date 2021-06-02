import { Heading, Description, Snippet } from "../..";
import './list.css'

export const List = () => {
    return (
        <>
            <Heading text="Lists"/>
            <Description text="Lists are continuous, vertical indexes of text or images."/>
            <>
                <div className="list">
                    <ul className="list-ul">
                        <li><a href='#!'><i className="fa fa-bell"></i>Inbox</a></li>
                        <li><a href='#!'><i className="fa fa-shopping-cart"></i>Cart</a></li>
                        <li><a href='#!'><i className="fa fa-shopping-bag"></i>Shopping Bag</a></li>
                        <li><a href='#!'><i className="fa fa-truck"></i>Deliver Van</a></li>
                    </ul>
                </div>
            </>
          
            
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
        </>
    )
}

