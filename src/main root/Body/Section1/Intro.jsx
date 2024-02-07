const Intro = () => {
    return(<>
        <div className="w-auto flex flex-col px-32 py-32 msm:block msm:w-full msm:px-8 msm:py-32">
            <h6 className="py-2">this is me</h6>
            <h2 className="text-3xl font-medium"> EMAD BOJDI </h2>
            <p className="py-4 text-gray-500">You will begin to realise why this exercise is called the Dickens Pattern  </p>

            <button className="self-start border w-32 h-12 py-2 text-center text-cyan-50 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md transition ease-linear delay-100 hover:from-blue-500 hover:to-cyan-400 duration-200"> Discover Now</button>
        </div>
    </>)
}

export default Intro;