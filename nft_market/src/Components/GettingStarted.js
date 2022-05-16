import StartCards from "./StartCards"

function GettingStarted(){
    return (
        <div className="bg-gray-100">
            <div className="my=10">
                <h1 className="text-blue-900 text-4xl text-center font-bold">Resources for Getting Started</h1>
                <h6 className="font-serif text-center py-5">A play of light and shade, chairoscuro in the <br/> realm between the light and dark.</h6>
            </div>
            <StartCards></StartCards>
        </div>
    )
}

export default GettingStarted