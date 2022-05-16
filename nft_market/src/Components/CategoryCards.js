import trending1 from '../Components/assests/trending1.png';
import trending2 from '../Components/assests/trending2.png';
import trending3 from '../Components/assests/trending3.png';
import person1 from '../Components/assests/person1.png';
import person2 from '../Components/assests/person2.png';
import person3 from '../Components/assests/person3.png';
import Verified from '../Components/assests/Verified.png';
function CategroryCards(){
    return(
    <div className="">
         <div className="px-20 py-10  inline-block">
        {/* Card 1 */}
        <div className="w-72 h-96 rounded-md overflow-hidden shadow-md relative inline-block">
            <img src={trending1} alt="" className="w-full h-full object-cover"></img>
            <div className="absolute bottom-0 left-0 right-0 bg-white">
                <img src={person1} alt="" className="w-10 h-10 my-1 mx-32 absolute"></img>
                <div className="py-14 text-center">
                    <h1 className="text-blue-900 font-sans inline">FriYaywiz</h1>
                    <img className=" w-5 h-5 inline" src={Verified} alt="" ></img>
                    <h6>A play of light and shade,<br/> chairoscuro is the realm.</h6>
                </div>
            </div>
        </div>
        </div>
        <div className="px-20 py-10 inline-block">
        {/* Card 1 */}
        <div className="w-72 h-96 rounded-md overflow-hidden shadow-md relative inline-block">
            <img src={trending2} alt="" className="w-full h-full object-cover"></img>
            <div className="absolute bottom-0 left-0 right-0 bg-white">
            <img src={person2} alt="" className="w-10 h-10 my-1 mx-32 absolute"></img>
                <div className="py-14 text-center">
                    <h1 className="text-blue-900 font-sans inline">Pixelwizards</h1>
                    <img className=" w-5 h-5 inline" src={Verified} alt="" ></img>
                    <h6>A play of light and shade,<br/> chairoscuro is the realm.</h6>
                </div>
            </div>
        </div>
        </div>
        <div className="px-20 py-10 inline-block">
         {/* Card 1 */}
         <div className="w-72 h-96 rounded-md overflow-hidden shadow-md relative inline-block">
            <img src={trending3} alt="" className="w-full h-full object-cover"></img>
            <div className="absolute bottom-0 left-0 right-0 bg-white">
            <img src={person3} alt="" className="w-10 h-10 my-1 mx-32 absolute"></img>
                <div className="py-14 text-center">
                    <h1 className="text-blue-900 font-sans inline">Aesthtic's smatter</h1>
                    <img className=" w-5 h-5 inline" src={Verified} alt="" ></img>
                    <h6>A play of light and shade,<br/> chairoscuro is the realm.</h6>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default CategroryCards;