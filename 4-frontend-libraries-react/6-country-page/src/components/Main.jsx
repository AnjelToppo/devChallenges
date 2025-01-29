import Card from "./Card.jsx";
import CountryDetail from "./CountryDetail.jsx";
import {useState} from "react";

export default function Main() {
    const [isResultDisplay, setIsResultDisplay] = useState(true);
    const [country, setCountry] = useState(null);

    async function handleCountryClick(countryCode) {
        let fields = '?fields=flags,name,population,area,capital,subregion,languages,currencies,continents,borders'
        await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`+fields)
            .then(response => response.json())
            .then(data => setCountry(data))
            .catch(err => console.log(err))
        setIsResultDisplay(false);
    }

    return (<main className="main">
        {isResultDisplay && <Card onCountryClick={handleCountryClick}/>}
        {!isResultDisplay && <CountryDetail country={country} onCountryClick={handleCountryClick}/>}
    </main>)
}