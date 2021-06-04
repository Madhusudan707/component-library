import {useState} from 'react'
import { createContext, useContext} from "react";


export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
 const [isShow,setIsShow] = useState(false)

  return (
    <ToggleContext.Provider
      value={{isShow,setIsShow }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  return useContext(ToggleContext);
};
