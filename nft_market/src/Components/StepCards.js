import SingleStep from "./SingleStep";

function StepCards(props){
    return(
    <div>
    {props.items.map((item)=>
        <SingleStep
            key={item.id}
            title={item.title}
            content={item.content}
        />
    )}
    </div>
    );
}

export default StepCards;