import picture1 from '../Components/assests/art.png';
import picture2 from '../Components/assests/music.png';
import picture3 from '../Components/assests/worlds.png';
import picture4 from '../Components/assests/trading.png';
import picture5 from '../Components/assests/collectibles.png';
import picture6 from '../Components/assests/sports.png';
import picture7 from '../Components/assests/domain.png';
import picture8 from '../Components/assests/all.png';

function AllCategories(){
    return(
        <div>
            <div className="grid grid-cols-4 gap-4 py-20 px-10">
                <div className="px-1 py-5">
                    <img src={picture1} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Art</h1>
                    <h6 className="text-xs px-20">Art is something that stimulates an individual thoughts</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture2} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Music</h1>
                    <h6 className="text-xs px-20">Music is the art of arraning sounds elements of melody</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture3} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Visual Worlds</h1>
                    <h6 className="text-xs px-20">visuals are the picture elements, as distinguished</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture4} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Trading Cards</h1>
                    <h6 className="text-xs px-20">A Trading card or collectable card, it is a small card</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture5} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">collectibles</h1>
                    <h6 className="text-xs px-20">An item worth far more than it is sold fpr rarity</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture6} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Sports</h1>
                    <h6 className="text-xs px-20">Sports pertains to any for of competitive</h6>
                </div>
                <div className="px-1 py-5">
                    <img src={picture7} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">Domain Name</h1>
                    <h6 className="text-xs px-20">Use Traditional domains, The native name suffix</h6>
                </div>
                <div classname="px-1 py-5">
                    <img src={picture8} className="w-20 h-20 inline px-1 absolute"></img>
                    <h1 className="font-bold text-sm text-blue-900 px-20">All NFT's</h1>
                    <h6 className="text-xs px-20">All NFT's stored combined in a category.</h6>
                </div>
            </div>
        </div>
    );
}

export default AllCategories;