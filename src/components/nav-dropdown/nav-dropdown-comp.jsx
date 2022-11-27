import { Link } from "react-router-dom"
import { useContext } from "react"
import { NavDropdownContext } from "../../contexts/nav-context/nav-dropdown-context"


const NavDropdownComp = () => {

    const {isNavDropped, setIsNavDropped} = useContext(NavDropdownContext);

    const handleNavClose = () => {
        setIsNavDropped(false);
    }


  return (
    <div className={`${isNavDropped ? 'w-1/2 max-sm:w-3/4 opacity-100' : 'w-0 opacity-0'} transition-all md:hidden right-0 bg-[#E8E8E8] h-screen fixed z-30`}>
        <div className="w-full flex items-center justify-center bg-[#256C75] text-white min-h-[150px]">
           <span className='font-semibold text-2xl md:text-3xl font-serif'>dp stores</span>
        </div>
        <div className="cursor-pointer border-b border-[#1b4452] p-4" onClick={handleNavClose}>
            <Link to='/'>Home</Link>
        </div>
        <div className="cursor-pointer border-b border-[#1b4452] p-4" onClick={handleNavClose}>
            <Link to='/men'>Men</Link>
        </div>
        <div className="cursor-pointer border-b border-[#1b4452] p-4" onClick={handleNavClose}>
            <Link to='/women'>Women</Link>
        </div>
        <div className="cursor-pointer border-b border-[#1b4452] p-4" onClick={handleNavClose}>
            <Link to='/accessories'>Accessories</Link>
        </div>
    </div>
  )
}

export default NavDropdownComp