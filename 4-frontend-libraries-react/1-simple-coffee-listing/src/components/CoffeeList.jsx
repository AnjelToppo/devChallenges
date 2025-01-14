import Card from "./Card.jsx";

export default function CoffeeList({active, coffeeData}) {
    let availableNowData = coffeeData.filter((coffee) => coffee.available);

    return (<div className="coffee-list">
            {active.allProductsBtn && coffeeData.map((coffee) => (<Card key={coffee.id} coffee={coffee}/>))}
            {active.availableNowBtn && availableNowData.map((coffee) => (<Card key={coffee.id} coffee={coffee}/>))}
        </div>)
}