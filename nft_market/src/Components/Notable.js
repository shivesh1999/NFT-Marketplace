import picture1 from '../Components/assests/notable1.png'
import picture2 from '../Components/assests/notable2.png'
import picture3 from '../Components/assests/notable3.png'
import picture4 from '../Components/assests/notable4.png'

function Notable(){
    return(
        <div>
            <div className="grid grid-cols-2 bg-background-3 w-full h-auto bg-cover bg-center ">
                <div className="mx-10 my-48">
                    <span>
                    <img src={picture1} className="mx-10 my-10 inline drop-shadow-2xl w-1/3 h-1/3"></img>
                    </span>
                    <span>
                    <img src={picture2} className="mx-10 my-10 inline drop-shadow-2xl w-1/4 h-1/4"></img>
                    </span>
                    <br></br>
                    <span>
                    <img src={picture4} className="mx-10 my-10 inline drop-shadow-2xl w-1/4 h-1/4"></img>
                    </span>
                    <span>
                    <img src={picture3} className="mx-10 my-10 inline drop-shadow-2xl w-1/3 h-1/3"></img>
                    </span>
                </div>
                <div className="mx-40 my-40 text-left">
                    <span>
                        <h1 className='text-blue-900 font-bold text-6xl py-10'>Notable Drops</h1>
                        <h6 className='text-2xl py-10'>Upload your work image, video,audio,<br/> 
                        or 3D art, add a title and description,<br/>
                        and customize your NFTs stats, and <br/>
                        unlockable content.</h6>
                    </span>
                    <button className="bg-blue-400 rounded w-58px px-8 py-4 text-white" >View all</button>
                </div>
            </div>
        </div>
    );
}

export default Notable;