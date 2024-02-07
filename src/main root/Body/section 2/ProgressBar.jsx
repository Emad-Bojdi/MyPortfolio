

const ProgressBar = ({bgcolor,progress})=>{
    return(<>
    <div className="w-auto h-5 rounded-2xl bg-zinc-200 m-1 md:pt-1 md:px-1 msm:pt-1 msm:px-1">
        <div className={`${progress} h-3 ${bgcolor} rounded-2xl md:h-3 `} >
            <span className="p-4 text-gray-200 font-bold "></span>
        </div>
    </div>
    </>)
}

export default ProgressBar;