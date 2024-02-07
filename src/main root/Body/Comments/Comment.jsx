import { Rating } from "@material-tailwind/react";

const Comment = ({ Writer, Star }) => {
  return (
    <>
      <div className="h-full flex flex-col bg-white p-8 m-4 shadow-sm  md:m-4 msm:p-4 msm:w-full md:w-4/5 ">
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit explicabo
          nam cupiditate totam id cumque optio ipsam porro laboriosam neque.
        </p>
        <p className="text-2xl font-bold pb-4 ">{Writer}</p>
        <Rating className="flex flex-wrap text-yellow-400" unratedColor="amber" ratedColor="amber" value={Star}/>
      </div>
    </>
  );
};

export default Comment;
