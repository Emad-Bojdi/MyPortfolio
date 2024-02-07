import ProgressBar from "./ProgressBar";

const ToolsExpert = () =>{
    return(<>
        <div className="md:w-2/5 h-full md:flex md:flex-end md:flex-col border ml-4 p-8 my-12 shadow-md block w-4/5 mx-auto ">
            <h3 className="text-2xl font-medium "> TOOLS EXPERTNESS </h3>
            <h4 className="text-right text-sm text-gray-500 py-2"> React 50%</h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-2/4"/>
            <h4 className="text-right text-sm text-gray-500 py-2"> JavaScript 60% </h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-3/5"/>
            <h4 className="text-right text-sm text-gray-500 py-2"> Html 80% </h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-4/5"/>
            <h4 className="text-right text-sm text-gray-500 py-2"> Css 80% </h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-4/5"/>
            <h4 className="text-right text-sm text-gray-500 py-2"> Next.js Loading </h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-0"/>
            <h4 className="text-right text-sm text-gray-500 py-2"> TypeScript Loading </h4>
            <ProgressBar bgcolor="bg-gradient-to-r from-cyan-400 to-blue-500" progress="w-0"/>
        </div>
    </>)
}

export default ToolsExpert