import CIcon from "@coreui/icons-react";
import { cilBook, cilLayers, cilPeople } from "@coreui/icons";

const AboutMe = () => {
  return (
    <>
      <div className=" md:w-2/4 md:h-full md:flex md:flex-col md:ml-8 block w-full ml-4">
      <h2 className="text-3xl font-bold pl-16 pt-8 msm:pl-1">ABOUT MYSELF</h2>
      <div className="w-3/4 py-4 pl-16 text-gray-500 msm:pl-1 msm:w-4/5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, odit
        officia ullam in vero consequuntur porro labore obcaecati eaque tempora
        ipsum voluptate ducimus excepturi velit iusto eveniet aut tenetur nihil!
      </div>
      <div className="w-full flex flex-row pl-16 pb-8 pt-8 msm:flex msm:flex-col msm:pl-0 msm:w-full">
        <div className="w-36 h-full border px-4 py-6 msm:w-96 msm:my-6">
        <CIcon icon={cilLayers} className="w-6 h-6 pb-1 text-sky-400"/>
          <p className="text-xl font-bold pb-1"> $2.5M </p>
          <p className="text-sm text-gray-500"> Total Donation</p>
        </div>
        <div className="w-36 h-full border px-4 py-6 mx-4 msm:mx-0 msm:w-96 msm:mb-6">
        <CIcon icon={cilBook} className="w-6 h-6 pb-1 text-sky-400" />
          <p className="text-xl font-bold pb-1">1465</p>
          <p className="text-sm text-gray-500"> Total Projects </p>
        </div>
        <div className="w-36 h-full border px-4 py-6 msm:w-96">
          <CIcon icon={cilPeople} className="w-6 h-6 pb-1 text-sky-400"/>
          <p className="text-xl font-bold pb-1">3965</p>
          <p className="text-sm text-gray-500"> Total Volunteers</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutMe;
