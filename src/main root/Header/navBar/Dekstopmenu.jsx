import MenuItemsData from "./MenuItems";
import Menuitem from "./MenuItem";

const DekstopMenu = () => {
  return (
    <>
      <nav
        className={`w-full h-2/4 md:h-full flex justify-center 
        `}
      >
        <ul className={`w-full h-full flex flex-row `}>
          {MenuItemsData.map((menu, index) => {
            return (
              <li className="h-auto py-2 md:py-3 text-sm md:text-2xl basis-1/6" key={index}>
                <Menuitem items={menu} key={index} />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default DekstopMenu;
