import CategroryCards from "./CategoryCards";
function Categories(){
    return(<div>
        <div className="bg-gray-100">
            <div className="my=10">
                <h1 className="text-blue-900 text-4xl text-center font-bold">Trending in All Categories</h1>
                <h6 className="font-serif text-center py-5">A play of light and shade, chairoscuro in the <br/> realm between the light and dark.</h6>
            </div>
            <div>
                <h1 className="text-blue-900 text-right px-10 font-bold font-sans">Recently Added | Mostly Used</h1>
                <CategroryCards/>
            </div>
        </div>
    </div>);
}

export default Categories