import "./hamburger.css";
import {useToggle} from '../../contexts/toggleContext'
export const Hamburger = () => {
const {isShow,setIsShow} = useToggle()

  return (
    <>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" onClick={()=>{setIsShow(!isShow)}} />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
    </>
  );
};
