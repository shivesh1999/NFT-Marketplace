

function SingleStep(props){
    return(
    <div className=" bg-gray-50 border-2 border-blue-900 w-1/6 inline-grid mx-12 my-10 rounded">
        <span className="mx-5 my-10 space-y-5 text-center">
        <h1 className="text-blue-900 font-bold">{props.title}</h1>
        <h1>{props.content}</h1>
        </span>
    </div>
    );
}

export default SingleStep