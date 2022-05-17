

function SingleStep(props){
    return(
    <div className="inline mx-5">
    <div className=" bg-gray-50 border-2 border-blue-900 h-80 w-56 px-auto py-auto inline-grid rounded mx-5 my-5 ">
        <span className="mx-5 my-10 space-y-5 text-center">
        <h1 className="text-blue-900 font-bold">{props.title}</h1>
        <h1>{props.content}</h1>
        </span>
    </div>
    </div>
    );
}

export default SingleStep