import Blog from "./Blog";
import post1 from '../../../../public/assets/Pictures/post1.png';
import post2 from '../../../../public/assets/Pictures/post2.png';
import post3 from '../../../../public/assets/Pictures/post3.png';
const Blogs = () => {
  return (
    <>
      <div className="w-full h-auto pt-16 pb-16 mt-8 mb-8">
        <div className="text-center w-2/4 mx-auto mb-6 msm:w-4/5">
          <h1 className="text-3xl font-bold">LATEST POSTS FROM BLOG</h1>
          <p className="mt-4 text-gray-500">
            if you are looking at blank cassettes on the web , you may be very
            confused at the diffrence in price. You may see some for as low as
            $.17 each.
          </p>
        </div>
        <div className="w-full h-auto block mx-auto lg:flex lg:flex-wrap lg:justify-center">
            <Blog Picture={post1}/>
            <Blog Picture={post2}/>
            <Blog Picture={post3}/>
        </div>
      </div>
    </>
  );
};

export default Blogs;
