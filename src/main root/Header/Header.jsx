import Mobilemenu from "./navBar/MobileMenu";
import DekstopMenu from "./navBar/Dekstopmenu";
import Logo from "./Logo/Logo";
import { useEffect, useState} from "react";
const Header = ()=> {
    const [isSticky,setIsSticky] = useState(false);
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleScroll = ( )=> {
            if (window.scrollY > 0){
                setIsSticky(true)
            }
            else setIsSticky(false);
        };
        window.addEventListener('scroll',handleScroll);
        return ()=> {
            window.removeEventListener('scroll',handleScroll)
        }
    },[]);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',handleWindowResize);
        return () => {
            window.removeEventListener('scroll',handleWindowResize)
        }
    },[]);
    return(<>
        <div className={` h-16 w-full flex shadow-xl ${ isSticky ? ' msm:sticky msm:z-10  msm:shadow-md msm:bg-white' : ''}`} >
          <Logo />
          { windowWidth < 976 ? <Mobilemenu/> : <DekstopMenu/> }
        </div>
    </>)
}

export default Header

// ${ isSticky ? ' msm:sticky msm:z-10  msm:shadow-md msm:bg-white' : ''}