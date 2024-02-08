import { useState} from "react";
import Dropdown from "./Dropdown"
import PropTypes from 'prop-types';
const MenuItem = ({items}) => {
  const [isHovered, setIsHovered] = useState(false);
  // const handleMouseHover = () => {
  //   setTimeout(() => {
  //     setIsHovered(true);
  //   }, 500);
  // };
  // const handleMouseLeave = () => {
  //   setTimeout(() => {
  //     setIsHovered(false);
  //   }, 1500);
  // };

  const focusOn = () => {
    setIsHovered(!isHovered);
  };
    return(<>
    <ul className="w-full h-auto no-underline pl-5 md:px-2 py-2 text-sm  font-medium text-black text-left">
        {items.submenu ? (
            <>
            <button type="button" onClick={focusOn} className="w-full text-left">
                {items.title}
            </button>
            <Dropdown isHovered={isHovered} submenus={items.submenu} key={items.submenu.key}/>
            </>
        ) : (
            <a href={items.url} className="" >{items.title}</a>
        )}
    </ul>
    
    </>)
}

export default MenuItem;

MenuItem.propTypes = {
  items: PropTypes.object
  
}