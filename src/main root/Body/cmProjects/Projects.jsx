import Project from "./Project";
import img1 from '../../../../public/assets/Pictures/img1.png'
import img2 from '../../../../public/assets/Pictures/img2.png'
import img3 from '../../../../public/assets/Pictures/img3.png'
import img4 from '../../../../public/assets/Pictures/img4.png'
import img5 from '../../../../public/assets/Pictures/img5.png'
import img6 from '../../../../public/assets/Pictures/img6.png'
const Projects = () => {
  return (
    <>
      <div className="w-full h-auto pt-16 pb-16 mt-8 mb-8">
        <div className="text-center mx-auto mb-6 w-4/5 md:w-2/4">
          <h1 className="md:text-3xl font-bold text-2xl">
            
            OUR RECENT COMPLETED PROJECTS
          </h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            culpa!
          </p>
          <div className="w-full h-auto mt-16 flex md:justify-around justify-between">
            <a href="#" className="text-md text-stone-500 focus:text-blue-400 hover:text-cyan-300">
              
              All Categories
            </a>
            <a href="#" className="text-md text-stone-500 focus:text-blue-400 hover:text-cyan-300">
              
              Branding
            </a>
            <a href="#" className="text-md text-stone-500 focus:text-blue-400 hover:text-cyan-300">
              
              Creative Work
            </a>
            <a href="#" className="text-md text-stone-500 focus:text-blue-400 hover:text-cyan-300">
              
              Web Design
            </a>
          </div>
        </div>
        <div className="w-full h-auto block mx-auto sm:flex sm:flex-wrap sm:justify-center lg:px-28 md:px-6">
        <Project Picture={img1}/>
        <Project Picture={img2}/>
        <Project Picture={img3}/>
        <Project Picture={img4}/>
        <Project Picture={img5}/>
        <Project Picture={img6}/>
        </div>
      </div>
    </>
  );
};

export default Projects;
