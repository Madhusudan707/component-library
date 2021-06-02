
import {Brand} from '../'
import './sidenav.css'
import {Link} from 'react-router-dom'
import {HOME,AVATAR,ALERT,BADGE,BUTTON,CARD,IMAGE,INPUT,LIST,MODAL} from '../../routing/paths'
export const SideNav = () => {
    return (
        <div className='flex flex-col bg-green-500 lg:w-72 lg:h-screen bg-gradient-to-b from-blue-500  to-blue-700 fixed sidenav z-10'>
           <Brand/>
           <div className='border-b w-full mt-5'></div>
           <div className='flex flex-col items-center show-scroll scrollbar-style '>
               <ul className='text-white text-2xl p-4'>
                   <li><Link to={HOME}>Home</Link></li>
                   <li><Link to={AVATAR}>Avatar</Link></li>
                   <li><Link to={ALERT}>Alert</Link></li>
                   <li><Link to={BADGE}>Badge</Link></li>
                   <li><Link to={BUTTON}>Button</Link></li>
                   <li><Link to={CARD}>Card</Link></li>
                   <li><Link to={IMAGE}>Image</Link></li>
                   <li><Link to={INPUT}>Input</Link></li>
                   <li><Link to={LIST}>Lists</Link></li>
                   <li><Link to={MODAL}>Modal</Link></li>
                   <li><a href='#!'>Rating</a></li>
                   <li><a href='#!'>Typography</a></li>
                   <li><a href='#!'>Toast</a></li>
               </ul>

           </div>
        </div>
    )
}
