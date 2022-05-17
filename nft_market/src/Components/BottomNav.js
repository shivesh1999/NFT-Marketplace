import picture1 from '../Components/assests/facebook.png';
import picture2 from '../Components/assests/youtube.png';
import picture3 from '../Components/assests/discord.png';
import picture4 from '../Components/assests/twitter.png';

function BottomNav(){
    return(
        <div>
            <div className="bg-bottom-nav w-screen h-auto bg-cover bg-center">
            <span class="grid grid-cols-2">
                <span className="bg-bottom-bg1 w-full h-auto  px-10 py-10 relative">
                    <img src="image.png" alt="" className="inline px-5 py-5 w-24 h-24"/>
                    <span className="font-bold inline text-2xl text-white">OpenSea</span>
                    <p className="px-10 py-5 text-white">
                    From Opensea.io, go to your profile icon and click “Create” in the top right
                    corner. You’ll be taken to the NFT item creation page. This page will allow
                    you to upload your NFT file, name it andbg-cover bg-center add a description.
                    </p>
                    <span>
                    <img src={picture1} alt="" className="inline px-5 py-10 "/>
                    <img src={picture2} alt="" className="inline px-5 py-10 "/>
                    <img src={picture3} alt="" className="inline px-5 py-10 "/>
                    <img src={picture4} alt="" className="inline px-5 py-10"/>
                    </span>
                </span>
                <span>
                    <div className="grid grid-cols-3 text-blue-900 px-10">
                        <div>
                            <ul>
                                <li className="font-bold py-5">Resources</li>
                                <li>Help Center</li>
                                <li>Platform Status</li>
                                <li>Partners</li>
                                <li>Gas-Free Marketplace</li>
                                <li>Suggestions</li>
                                <li>Discord Community</li>
                                <li>Newsletter</li>
                                <li>Blog</li>
                                <li>Docs</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="font-bold py-5">My Account</li>
                                <li>Profile</li>
                                <li>Favorites</li>
                                <li>My Collections</li>
                                <li>Settings</li>
                                <li className="font-bold py-5">Stats</li>
                                <li>Rakings</li>
                                <li>Activity</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <li className="font-bold py-5">Company</li>
                                    <li>About</li>
                                    <li>Careers</li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='px-10 py-10 text-blue-900'>
                        <h1 className='font-bold text-xl'>Stay In The Loop</h1>
                        <p>Join our mailing list to stay in the loop with out newest feature releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
                        <input placeholder=" Email Address " className="bg-gray-100 px-3 py-3 mx-2 my-2 inline"/>
                        <button className="bg-blue-400 text-white px-3 py-3 mx-2 my-2 inline" >Sign Up</button>
                        <h6 className='text-s text-blue-900 text-right'>privacy policy</h6>
                        <h6 className='text-s text-blue-900 text-right'>Terms and Conditions</h6>
                    </div>
                </span>
            </span>
            </div>
        </div>
    )
}

export default BottomNav;