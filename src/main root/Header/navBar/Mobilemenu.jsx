import { useState } from "react";
import MenuItemsData from "./MenuItems";
import Menuitem from "./MenuItem";
import Menubar from "./Menubar";

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav
        className={`w-full h-2/4 flex justify-center overflow-auto  ${
          isOpen ? "w-full h-2/4 block absolute left-0 top-0 " : "opacity-0"
        }`}
      >
        <ul
          className={`w-full h-full flex flex-row overflow-auto divide-y ${
            isOpen
              ? " transition ease-in delay-100 flex flex-col relative left-0 top-16 px-0 bg-gray-50 duration-400 "
              : "opacity-0"
          }`}
        >
          {MenuItemsData.map((menu, index) => {
            return (
              <li
                className="w-full h-auto py-2  text-sm "
                key={index}
              >
                <Menuitem items={menu} key={index} />
              </li>
            );
          })}
        </ul>
      </nav>
      <Menubar isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Mobilemenu;

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const handleOpen = () => {
//   //   setIsOpen(true);
//   // };
//   // const handleLeave = () => {
//   //   setIsOpen(false);
//   // }
//   // const focusOn = ( )=> {
//   //   setIsOpen(!isOpen);

//   // }
//   const Blogs = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const handleMouseHover = () => {
//       setTimeout(() => {
//         setIsHovered(true);
//       }, 500);
//     };
//     const handleMouseLeave = () => {
//       setTimeout(() => {
//         setIsHovered(false);
//       }, 1500);
//     };

//     const focusOn = () => {
//       setIsHovered(!isHovered);
//     };
//     return (
//       <>
//         {/* <button
//             onMouseOver={handleMouseHover}
//             onMouseLeave={handleMouseLeave}
//             onClick={focusOn}
//             className="w-full h-auto no-underline p-4 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black msm:text-left"
//           >
//             {" "}
//             Blogs{" "}
//              */}
//         <div
//           className="w-full h-auto no-underline msm:border-b msm:pl-5 msm:py-2 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black msm:text-left"
//           onMouseOver={handleMouseHover}
//           onMouseLeave={handleMouseLeave}
//           onClick={focusOn}
//         >
//           BLOGS
//           <ul
//             className={`lg:absolute my-8  bg-slate-50 divide-y shadow-3xl msm:text-black ${
//               isHovered
//                 ? "msm:block msm:w-full msm:h-auto  msm:my-4 msm:shadow-none "
//                 : "hidden"
//             }`}
//           >
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm msm:px-4 msm:focus:bg-sky-300">
//               <a href="/blog" className="">
//                 BLOG
//               </a>
//             </li>
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm msm:px-4 msm:mb-4">
//               <a href="/blog-details" className="">
//                 BLOG DETAILS
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* {`${isHovered ? " msm:w-full msm:h-auto relative" : "hidden"} `} */}
//         {/* <div className={isHovered ? "absolute" : "hidden"}>
//             <ul className="absolute my-8  bg-slate-50 divide-y shadow-3xl">
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm">
//                   <a href="/blog" className="">
//                     BLOG
//                   </a>
//                 </li>
//                 <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm">
//                   <a href="/blog-details" className="">
//                     BLOG DETAILS
//                   </a>
//                 </li>
//             </ul>
//           </div> */}
//       </>
//     );
//   };
//   const Pages = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const handleMouseHover = () => {
//       setTimeout(() => {
//         setIsHovered(true);
//       }, 500);
//     };
//     const handleMouseLeave = () => {
//       setTimeout(() => {
//         setIsHovered(false);
//       }, 1500);
//     };
//     const focusOn = () => {
//       setIsHovered(!isHovered);
//     };
//     return (
//       <>
//         <div
//           onMouseOver={handleMouseHover}
//           onMouseLeave={handleMouseLeave}
//           onMouseEnter={focusOn}
//           className="w-full h-auto no-underline msm:border-b msm:pl-5 msm:py-2 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black msm:text-left"
//         >
//           {" "}
//           PAGES{" "}
//           <ul
//             className={`lg:absolute my-8  bg-slate-50 divide-y shadow-3xl msm:text-black ${
//               isHovered
//                 ? "msm:block msm:w-full msm:h-auto  msm:my-4 msm:shadow-none "
//                 : "hidden"
//             }`}
//           >
//             <li className="className=w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm msm:px-4 msm:focus:bg-sky-300">
//               <a href="/portfolio" className="">
//                 PORTFOLIO
//               </a>
//             </li>
//             <li className="className=w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm msm:px-4 msm:focus:bg-sky-300">
//               <a href="/project-details" className="">
//                 PROJECT DETAILS
//               </a>
//             </li>
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm msm:px-4 msm:mb-4">
//               <a href="/elements" className="">
//                 ELEMENTS
//               </a>
//             </li>
//           </ul>
//         </div>
//         {/* <div className={isHovered ? "absolute" : "hidden"}>
//           <ul className="absolute my-8  bg-slate-50 divide-y shadow-3xl">
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm">
//               <a href="/portfolio" className="">
//                 PORTFOLIO
//               </a>
//             </li>
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm">
//               <a href="/project-details" className="">
//                 PROJECT DETAILS
//               </a>
//             </li>
//             <li className="w-full h-full px-8 py-2 hover:bg-sky-300 hover:text-slate-50 text-sm">
//               <a href="/elements" className="">
//                 ELEMENTS
//               </a>
//             </li>
//           </ul>
//         </div> */}
//       </>
//     );
//   };
//   return (
//     <>
//       <div
//         className={`msm:flex msm:flex-col msm:justify-end msm:w-8 msm:h-8 msm:cursor-pointer msm:mt-2 msm:mr-2 $`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span
//           className={`msm:w-full msm:h-1 msm:bg-sky-400 msm:my-1 transition ease transform duration-300 ${
//             isOpen ? " rotate-45 translate-y-2 " : ""
//           }`}
//         >
//           {" "}
//         </span>
//         <span
//           className={`msm:w-full msm:h-1 msm:bg-sky-400 msm:mb-1 transition ease transform duration-300 ${
//             isOpen ? "opacity-0" : ""
//           }`}
//         >
//           {" "}
//         </span>
//         <span
//           className={`msm:w-full msm:h-1 msm:bg-sky-400 msm:mb-1 transition ease transform duration-400 ${
//             isOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         >
//           {" "}
//         </span>
//       </div>
//       {/* <MenuBar handleMenu={handleOpen} isOpen={isOpen}/> */}

//       <nav
//         className={`w-full h-2/4 flex justify-end msm:overflow-y-scroll ${
//           isOpen ? "msm:block msm:absolute" : "msm:hidden"
//         }`}
//       >
//         <ul
//           className={`flex flex-row px-24 py-4 ${
//             isOpen
//               ? "transition ease delay-100 msm:flex msm:flex-col msm:relative msm:left-0 msm:top-10 msm:px-0 msm:bg-gray-50 duration-300"
//               : "msm:hidden"
//           }`}
//         >
//           <li className="msm:py-2 msm:border-b msm:pl-1">
//             <a
//               className="no-underline p-6 text-sm  text-gray-600 hover:text-sky-500 font-medium msm:p-4 msm:text-black"
//               href="/"
//             >
//               {" "}
//               HOME
//             </a>
//           </li>
//           <li className="msm:py-2 msm:border-b msm:pl-1">
//             <a
//               className="no-underline p-4 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black"
//               href="/about"
//             >
//               {" "}
//               ABOUT{" "}
//             </a>
//           </li>
//           <li className="msm:py-2 msm:border-b msm:pl-1">
//             <a
//               className="no-underline p-4 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black"
//               href="/services"
//             >
//               {" "}
//               SERVICES{" "}
//             </a>
//           </li>
//           <li className="">
//             <Pages />
//           </li>
//           <li className="">
//             <Blogs />
//           </li>
//           <li className="msm:py-2 msm:border-b msm:pl-1">
//             <a
//               className="no-underline  p-4 text-sm text-gray-600 hover:text-sky-500 font-medium msm:text-black"
//               href="/contact"
//             >
//               {" "}
//               CONTACT{" "}
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default NavBar;
