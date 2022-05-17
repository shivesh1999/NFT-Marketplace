import picture1 from '../Components/assests/started1.png';
import picture2 from '../Components/assests/started2.png';
import picture3 from '../Components/assests/started3.png';

function StartCards(){
    return(<div>
        <div className="px-32 py-10">
            {/* Card 1 */}
            <div className="bg-white w-80 h-20 mx-5 my-5 rounded-2xl inline-block">
                <div className="px-2 py-2">
                <img src={picture1} className="absolute h-16 w-16 inline-block"></img>
                <span className="inline-block py-auto">
                <h6 className="text-blue-900 text-xs px-20 font-bold">10 tips of avaoiding scams and staying safe.</h6>
                </span>
                </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white w-80 h-20  mx-5 my-5 rounded-2xl space-x-5 inline-block">
                <div className="px-2 py-2">
                <img src={picture2} className="absolute h-16 w-16 inline-block"></img>
                <span className="inline-block py-auto">
                <h6 className="text-blue-900 text-xs px-20 font-bold">Keeping yourselft safe when buying NFT's from OpenSea</h6>
                </span>
                </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white w-80 h-20 mx-5 my-5 rounded-2xl inline-block">
                <div className="px-2 py-2">
                <img src={picture3} className="absolute h-16 w-16 inline-block"></img>
                <span className="inline-block py-auto">
                <h6 className="text-blue-900 text-xs px-20 font-bold">Guide to creating and selling digital art NFT'S.</h6>
                </span>
                </div>
            </div>
        </div>
    </div>)
}

export default StartCards;