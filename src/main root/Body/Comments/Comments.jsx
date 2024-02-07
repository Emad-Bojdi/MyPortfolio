import Comment from "./Comment";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComments = () => {
  var settings = {
    arrows:false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full h-auto pt-16 pb-16 mt-8 mb-8 bg-stone-100">
        <div className="text-center w-2/4 mx-auto mb-6">
          <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            culpa!
          </p>
        </div>
        <div className="slider-container">
          <Slider
            {...settings}
            className="w-full h-full msm:p-16 md:p-8 md:mx-4 md:gap-3"
          >
            <Comment Writer="Emad Bojdi" Star={4} />
            <Comment Writer="Emad Bojdi" Star={4} />
            <Comment Writer="Emad Bojdi" Star={4} />
          </Slider>
        </div>
      </div>
    </>
  );
};
export default SliderComments;

// export default SliderComment = () => {

// }

// const Comments = () => {
//     return(
//         <>
//         <div className="w-full h-auto pt-16 pb-16 mt-8 mb-8 bg-stone-50">
//         <div className="text-center w-2/4 mx-auto mb-6">
//           <h1 className="text-3xl font-bold">
//             TESTIMONIALS
//           </h1>
//           <p className="mt-4 text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
//             culpa!
//           </p>
//         </div>
//         <div className="w-full h-auto flex flex-wrap justify-center">
//         <Slider {...settings}>
//         <Comment Writer="Emad Bojdi" Star={4}/>
//         <Comment Writer="Emad Bojdi" Star={4}/>
//         <Comment Writer="Emad Bojdi" Star={4}/>
//         </Slider>
//         </div>
//       </div>
//         </>
//     )
// // }

// export default Comments;
