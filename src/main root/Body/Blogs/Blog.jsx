// eslint-disable-next-line react/prop-types
const Blog = ({Picture}) => (
  <>
    <div className="lg:w-1/4 lg:h-auto lg:flex lg:flex-col lg:p-8 lg:m-4 w-2/4 block mx-auto  p-4">
      <img src={Picture} alt="" />
      <h1 className="w-full py-4 txt-2xl font-bold transition ease-linear delay-100 hover:text-cyan-500 duration-150 cursor-pointer"> ADDICTION WHEN GAMBLING BECOMES A PROBLEM</h1>
      <p className="text-sm text-stone-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, rem nihil
        pariatur beatae amet cum, minus voluptatem sunt, dolorem vitae
        molestias officiis! Repellat ullam suscipit commodi quo itaque
        aspernatur. Minus atque dolorem dignissimos libero quia iste accusamus
        porro dolor quaerat?
      </p>
    </div>
  </>
);

export default Blog;
