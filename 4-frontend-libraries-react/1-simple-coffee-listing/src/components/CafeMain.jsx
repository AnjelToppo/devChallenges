import {useState, useEffect} from "react";
import Heading from "./Introduction.jsx";
import Buttons from "./Buttons.jsx";
import CoffeeList from "./CoffeeList.jsx";

export default function CafeMain() {
    const [coffeeData, setCoffeeData] = useState([]);
    const [active, setActive] = useState({
        allProductsBtn: true, availableNowBtn: false
    })

    function handleProductsClick() {
        setActive(() => ({allProductsBtn: true, availableNowBtn: false}))
    }

    function handleAvailableClick() {
        setActive(() => ({allProductsBtn: false, availableNowBtn: true}))
    }

    useEffect(() => {
        // Fetch data and set coffeeData
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
        )
            .then((response) => response.json()
            )
            .then((data) => {
                // Use the data here
                setCoffeeData(data)
            })
            .catch((error) => {
                // Handle any errors here
                console.log(error)
            });
    }, []);

    return (<main className="cafe-main">
        <div className="container">
            <Heading />
            <Buttons active={active} onProductsClick={handleProductsClick} onAvailableClick={handleAvailableClick}/>
            <CoffeeList active={active} coffeeData={coffeeData} />
        </div>
    </main>)
}