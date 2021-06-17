
import {Brand,Header,Hamburger} from '../'
import {useToggle} from "../../contexts/toggleContext"
import './sidenav.css'
import './sideNavToggle.css'
import {Link} from 'react-router-dom'
import {HOME,AVATAR,ALERT,BADGE,BUTTON,CARD,INPUT,LIST,MODAL,TOAST} from '../../routing/paths'

export const SideNav = () => {
    const {isShow} = useToggle()
    return (
        <>
         <Header/>
         <Hamburger/>
        <div className='flex flex-col lg:mt-0 mt-20 w-80 lg:w-72 lg:h-screen bg-gradient-to-b from-blue-500  to-blue-700 fixed sidenav z-10'>
           <Brand/>
           
           <div className='border-b w-full mt-5 divider'></div>
           <div className={`flex flex-col items-center show-scroll   scrollbar-style ${isShow?null:"menuHide"}`} id="sidebarMenu">
               <ul className='text-white text-2xl p-4 h-screen '>
                   <li><Link to={HOME}>Home</Link></li>
                   <li><Link to={AVATAR}>Avatar</Link></li>
                   <li><Link to={ALERT}>Alert</Link></li>
                   <li><Link to={BADGE}>Badge</Link></li>
                   <li><Link to={BUTTON}>Button</Link></li>
                   <li><Link to={CARD}>Card</Link></li>
                   <li><Link to={INPUT}>Input</Link></li>
                   <li><Link to={LIST}>Lists</Link></li>
                   <li><Link to={MODAL}>Modal</Link></li>
                   <li><Link to={TOAST}>Toast</Link></li>
               </ul>
           </div>
        </div>
        </>
    )
}
