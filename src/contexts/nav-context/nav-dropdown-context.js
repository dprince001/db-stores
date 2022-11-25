import { createContext, useState } from "react";

export const NavDropdownContext = createContext({
    isNavDropped: false,
    setIsNavDropped: () => {}
});

export const NavDropdownProvider = ({children}) => {
    const [isNavDropped, setIsNavDropped] = useState(false);
    const value = {isNavDropped, setIsNavDropped}; 

    return <NavDropdownContext.Provider value={value}>{children}</NavDropdownContext.Provider>
}