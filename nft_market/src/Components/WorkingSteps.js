import StepCards from "./StepCards";
const stepsForUse=[
     {id:'s1', title: 'Set up your wallet', content: 'Once youve set your wallet of choice, connect it to OpenSea. Learn more abouts wallets we support'},
     {id:'s2', title: 'Create your collection',content: 'Click My Collections and set up your collection.Add social links,a description,profile & banner images, and set a secondary.'},
     {id:'s3', title: 'Add your NFTs', content: 'Upload your work (image, video, audio or 3d art), add a title and description, and customize your NFTs stats, and unlockable content.'},
     {id:'s4', title: 'List them for sale', content: 'choose between auction, fixed-price listings , and declining-price listings. you choose how you want to sell your NFTs.'}
  ];

function WorkingSteps(){
    return(
        <div>
            <div className="bg-gray-100  px-10 py-10 border-2 border-white rounded">
                <span className="text-2xl justify-center text-center">
                    <h1 className="font-bold text-blue-900">Create and Sell your NFT's</h1>
                    <h2>A play light and shade, chairoscuro is the <br/> realm between light and dark.</h2>
                </span>
                <span className="px-5">
                <StepCards items={stepsForUse}/>
                </span>
                
            </div>
        </div>
    );
}

export default WorkingSteps;