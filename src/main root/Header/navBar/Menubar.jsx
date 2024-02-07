import PropTypes from 'prop-types';

const Menubar = ({isOpen,toggleMenu}) => {
    return(
        <>
        <div
          className={`flex flex-col  w-8 h-8 cursor-pointer mt-4 mr-1 left-10 $`}
          onClick={toggleMenu}
          type="button"
        >
          <span
            className={`w-8 h-1 bg-sky-400 my-1 transition linear transform duration-300 ${
              isOpen ? " rotate-45 translate-y-2 " : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-sky-400 mb-1 transition linear transform duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-sky-400 mb-1 transition linear transform duration-400 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
        </>
    )
}

export default Menubar;

Menubar.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
}