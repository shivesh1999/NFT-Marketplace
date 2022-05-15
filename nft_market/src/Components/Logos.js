import picture1 from '../Components/assests/logo1.PNG'
import picture2 from '../Components/assests/logo2.PNG'
import picture3 from '../Components/assests/logo3.PNG'
import picture4 from '../Components/assests/logo4.PNG'
import picture5 from '../Components/assests/logo5.PNG'
import picture6 from '../Components/assests/logo6.PNG'

function Logos(){
    return(
        <div className="bg-gray-100 justify-center text-center">
            <div className="px-10 py-10">
                <span>
                    <img src={picture1} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
                <span>
                    <img src={picture2} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
                <span>
                    <img src={picture3} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
                <span className='container'>
                    <img src={picture4} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
                <br></br>
                <span>
                    <img src={picture5} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
                <span>
                    <img src={picture6} className="mx-10 my-10 inline drop-shadow-2xl"></img>
                </span>
            </div>
        </div>
    )
}

export default Logos