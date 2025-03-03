export default function Result({isLoading, countries, onCountryClick}) {
    return (<div className="result-container">
        {isLoading && <p className="loading">Loading...</p>}
        {!isLoading && <table className="result">
            <thead>
            <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Population</th>
                <th>Area(km)<sup>2</sup></th>
                <th>Region</th>
            </tr>
            </thead>
            <tbody>
            {countries.map(country => <tr key={country.name.common} onClick={() => onCountryClick(country.ccn3)}>
                <td><img src={country.flags.png}
                         alt={country.flags.alt}/>
                </td>
                <td>{country.name.common}</td>
                <td>{country.population.toLocaleString()}</td>
                <td>{country.area.toLocaleString()}</td>
                <td>{country.region}</td>
            </tr>)}

            </tbody>
        </table>}
    </div>)
}