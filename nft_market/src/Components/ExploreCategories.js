import AllCategories from "./AllCategories";
function ExploreCategories(){
    return(
        <div>
            <div className="bg-gray-100 px-10 py-10 ">
                <span className="text-center py-2">
                    <h1 className="text-blue-900 font-bold text-4xl py-10">Explore Categories</h1>
                    <h6 className="font-serif"> A play of light and shade, chairoscuro is the <br/> realm between the light and dark.</h6>
                </span>
                <AllCategories/>
                <span className=" flex text-center justify-center items-center">
                <button className="bg-blue-600 px-1 py-2 text-white text-xs text-center rounded">Explore marketplace</button>
                </span>
            </div>
        </div>
    );
}

export default ExploreCategories