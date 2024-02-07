import PropTypes from 'prop-types';

const Offer = ({ Icon, Sub}) => {
  return (
    <>
      <div className={`md:w-1/4 sm:w-1/3 h-full flex flex-col justify-center m-4 p-6 transition-shadow ease-linear delay-100 hover:shadow-md duration-200 group w-4/5 msm:bg-white `} >
        <div className={`w-12 h-12 m-6 ml-0`}> {Icon} </div>
        <p className="font-bold mb-4"> {Sub} </p>
        <p className="text-gray-500">
          if you are looking at blank cassettes on the web , you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each
        </p>
      </div>
    </>
  );
};

export default Offer;

Offer.propTypes = {
  Icon : PropTypes.any,
  Sub: PropTypes.string
}