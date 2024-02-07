import PropTypes from 'prop-types';


const Dropdown = ({submenus,isHovered}) => {

  return (
    <>
      <div className="w-full h-auto no-underline pl-2 py-1 text-sm  hover:text-sky-500 font-medium text-black text-left md:text-gray-400 md:relative"
          >
        <ul
          className={`lg:absolute my-1  bg-slate-50 divide-y shadow-3xl msm:text-black ${
            isHovered
              ? "msm:block msm:w-full msm:h-auto  msm:my-1 msm:shadow-none lg:absolute lg:my-8  lg:bg-slate-50  lg:shadow-3xl lg:msm:text-black"
              : "hidden"
          }`}
          
        >
          {submenus.map((submenu,index) => {
            return (
              <>
                <li
                  key={index}
                  className={`w-full h-full py-4 hover:bg-sky-300 focus:text-slate-50 text-sm px-1 focus:bg-sky-300 md:hover:text-slate-50 lg:text-center`}
                >
                  <a key={index} href={submenu.url} className="">
                    {submenu.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  submenus: PropTypes.array,
  isHovered: PropTypes.bool
}
