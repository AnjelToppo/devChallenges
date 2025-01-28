import {useEffect, useState} from "react";

export default function CountryDetail({country, onCountryClick}) {
    const [isNeighbourLoading, setIsNeighbourLoading] = useState(true);
    const [neighbours, setNeighbours] = useState([]);

    let countryLanguages = [];
    for (let language in country.languages) {
        countryLanguages.push(country.languages[language])
    }

    let countryCurrencies = [];
    for (let currency in country.currencies) {
        countryCurrencies.push(country.currencies[currency].name)
    }

    useEffect(() => {
        async function fetchNeighbour() {
            let neighboursData = await Promise.all(
                country.borders.map(async (border) => {
                    const response = await fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=ccn3,flags,name`);
                    return await response.json();
                })
            );
            setNeighbours(neighboursData)
            setIsNeighbourLoading(false)

        }
        fetchNeighbour()

    }, [country])


    return (<div className="country-detail">
        <div className="flag">
            <img className="flag__img"
                 src={country.flags.png}
                 alt={country.flags.alt} />
        </div>
        <div className="name">
            <h1 className="name__common">{country.name.common}</h1>
            <h2 className="name__official">{country.name.official}</h2>
        </div>
        <div className="population-area">
            <div className="population tag">
                <h3 className="population-area__title">Population</h3>
                <span className="population-area__data">{country.population}</span>
            </div>
            <div className="area tag">
                <h3 className="population-area__title">Area(km<sup>2</sup>)</h3>
                <span className="population-area__data">{country.area}</span>
            </div>
        </div>
        <div className="info">
            <div className="info-container">
                <h4 className="info__title">Capital</h4>
                <span className="info__data">{country.capital[0]}</span>
            </div>
            <div className="info-container">
                <h4 className="info__title">Subregion</h4>
                <span className="info__data">{country.subregion}</span>
            </div>
            <div className="info-container">
                <h4 className="info__title">Language</h4>
                <span className="info__data">{countryLanguages.join(', ')}</span>
            </div>
            <div className="info-container">
                <h4 className="info__title">Currencies</h4>
                <span className="info__data">{countryCurrencies[0]}</span>
            </div>
            <div className="info-container">
                <h4 className="info__title">Continents</h4>
                <span className="info__data">{country.continents[0]}</span>
            </div>
            <div className="neighbour-countries info-container">
                <h4 className="info__title">Neighbouring Countries</h4>
                <ul className="neighbour-country-list">
                    {isNeighbourLoading && <p>Loading...</p>}
                    {!isNeighbourLoading && neighbours.map(neighbour => <li key={neighbour.name.official} className="neighbour-country" onClick={() => {
                        setIsNeighbourLoading(true)
                        onCountryClick(neighbour.ccn3)
                    }}>
                        <div className="neighbour-country__flag">
                            <img
                                src={neighbour.flags.png}
                                alt={neighbour.flags.alt} className="neighbour-country__flag-img"/>
                        </div>
                        <span className="neighbour-country__name">{neighbour.name.common}</span>
                    </li>)}
                </ul>
            </div>

        </div>

    </div>)
}