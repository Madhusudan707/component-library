
import {Brand} from '../'
import './sidenav.css'
import {Link} from 'react-router-dom'
import {HOME} from '../../routing/paths'
export const SideNav = () => {
    return (
        <div className='flex flex-col bg-green-500 lg:w-72 lg:h-screen bg-gradient-to-b from-blue-500  to-blue-700 fixed sidenav z-10'>
           <Brand/>
           <div className='border-b w-full mt-5'></div>
           <div className='flex flex-col items-center show-scroll scrollbar-style '>
               <ul className='text-white text-2xl p-4'>
                   <li><Link to={HOME}>Home</Link></li>
                   <li><a href='#!'>Avatar</a></li>
                   <li><a href='#!'>Alert</a></li>
                   <li><a href='#!'>Badge</a></li>
                   <li><a href='#!'>Button</a></li>
                   <li><a href='#!'>Card</a></li>
                   <li><a href='#!'>Image</a></li>
                   <li><a href='#!'>Input</a></li>
                   <li><a href='#!'>Lists</a></li>
                   <li><a href='#!'>Navigation</a></li>
                   <li><a href='#!'>Modal</a></li>
                   <li><a href='#!'>Rating</a></li>
                   <li><a href='#!'>Typography</a></li>
                   <li><a href='#!'>Toast</a></li>
               </ul>

           </div>
        </div>
    )
}
