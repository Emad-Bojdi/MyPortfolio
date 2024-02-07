import {FaBuildingUser} from 'react-icons/fa6'
import {BsBuildingsFill} from 'react-icons/bs'
import {MdDesignServices} from 'react-icons/md'
import Offer from "./Offer";
const Offers = () => {
  return (
    <>
      <div className="w-full h-auto pt-16 pb-16 mt-16 mb-16 bg-stone-100">
        <div className="text-center w-2/4 mx-auto mb-16 msm:w-4/5 ">
          <h1 className="text-3xl font-bold" > OFFERINGS TO MY CLIENTS </h1>
          <p className="mt-6 text-gray-500">
            if you are looking at blank cassettes on the web , you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each
          </p>
        </div>
        <div className="w-full h-auto flex flex-wrap justify-center  ">
            <Offer Icon={<FaBuildingUser className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="ARCHITECTURE" />
            <Offer Icon={<BsBuildingsFill className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="INTERIOR DESIGN" />
            <Offer Icon={<MdDesignServices className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="CONCEPT DESIGN" />
            <Offer Icon={<FaBuildingUser className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="ARCHITECTURE" />
            <Offer Icon={<BsBuildingsFill className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="INTERIOR DESIGN"/>
            <Offer Icon={<MdDesignServices className='w-12 h-12 text-gray-300 group-hover:text-cyan-500'/>} Sub="CONCEPT DESIGN"/>
        </div>
      </div>
    </>
  );
};

export default Offers;
