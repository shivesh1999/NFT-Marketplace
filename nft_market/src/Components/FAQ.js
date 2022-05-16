

function FAQ(){
 return(
     <div>
        <div className="grid grid-cols-2 px-20 py-20 bg-gray-100">
            <div>
                <h1 className="text-blue-900 text-2xl px-10 py-5">
                    We will try to help you if you are confused.
                </h1>
                <p className="px-10">
                    A frequently asken question(FAQ) forum is
                    often used in article websites,email,lists,
                    and online forums where common questions
                    tend to recur. 
                </p>
            </div>
            <div className="text-blue-900 px-10  text-xl">
                <ul className="py-10">
                    <li>how do I create an NFT ?</li>
                    <li>How do I create and sell NFTs on polygon?</li>
                    <li>What is Freezing Meatadata ?</li>
                    <li>Does OpenSea allow physicak item traders ?</li>
                    <li>How do I add a collection collaborator ?</li>
                </ul>
                <button className="bg-blue-600 px-6 py-2 text-white  text-center rounded">view all</button>
            </div>
        </div>
     </div>
 );  
}

export default FAQ