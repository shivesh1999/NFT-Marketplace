import nftPreview from '../Components/assests/preview.png'
function Discover(){
    return(
        <div>
        <div className="grid grid-cols-2">
        <div className="bg-blue-900 bg-opacity-80 py-10 text-white space-y-2">
          <div className="mx-10 space-y-10 space-x-2">
          <span className="font-bold text-8xl space-y-5 ">
          <h1>Discover.</h1>
          <h1>Collect and Sell.</h1>
          <h1>Extraordinary</h1>
          <h1 style={{color: '#B6DCFF'}}>NFT's</h1>
          </span>
          <h1>On the world's first and largest NFT <br/> marketplace</h1>
          <button className="bg-blue-400 rounded w-58px px-8 py-4" >Explore</button>
          <button className="border-2 border-blue-400 rounded px-8 py-4">Create</button><br></br>
          <a className="text-sm text-gray-100" href="#"><h6>Get Featured On The HomePage</h6></a>
          </div>       
        </div>
        <div className=" text-white text-right mx-14 my-48">
            <img src={nftPreview} className="w-full rounded w-96 object-right"></img>
            <span className="space-y-5 text-2xl">
                <a className="underline text-xl font-bold" style={{color: '#B6DCFF'}}>SoulCurryArt</a>
                <h1>A play of light and shade, chairoscurso is the <br/>realm between the light and dark</h1>
                <button className="bg-gray-400  bg-opacity-50 border-2 border-white rounded w-58px px-8 py-4" >Place Bid</button>
            </span>
        </div>
        </div>
        </div>
    );
}

export default Discover;