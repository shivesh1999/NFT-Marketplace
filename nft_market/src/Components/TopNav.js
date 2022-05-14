
function TopNav(){
    return(
    <div>
        <nav className="flex justify-between bg-transparent py-5">
        <div className="text-white space-x-3 mx-3 ">
        <img src="image.png" alt="" className="inline"/>
        <span className="font-bold inline">OpenSea</span>
        </div>
        <div className="text-grey space-x-5 mx-5">
        <input placeholder=" Search" className="bg-gray-300 inline"/>
        <img src="vector(1).png" alt="" className="inline"/>
        <img src="vector(2).png" alt="" className="inline"/>
        </div>
        </nav>
    </div>
    );
}

export default TopNav;