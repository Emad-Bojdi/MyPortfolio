const Project = ({ Picture }) => {
  return (
    <>
      <div className="w-full block mx-auto p-12 sm:w-2/4 md:w-1/3 h-auto relative md:p-6 ">
        <div className="w-full h-auto block mx-auto relative group">
          <img src={Picture} alt="" className=" transition ease-in-out delay-50 opacity-100 group-hover:opacity-50 duration-150" />
          <div className="w-full h-auto absolute bottom-2 ml-4">
            <a href="#" className="">
              <h4 className="transition ease-in-out delay-150 text-transparent bg-clip-text inline-block font-bold group-hover:bg-gradient-to-r from-cyan-400 to-blue-500 duration-100 before:text-black"> 3D HELMET DESIGN </h4>
            </a>
            <p className="block mx-auto text-sm text-gray-400 pt-1">Client Project</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
