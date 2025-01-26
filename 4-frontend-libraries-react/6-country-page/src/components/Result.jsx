export default function Result({isLoading, countries}) {
    return (<div className="result-container">
        {isLoading && <p>Loading...</p>}
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
            {countries.map(country => <tr key={country.name.common}>
                <td><img src={country.flags.png}
                         alt={country.flags.alt} />
                </td>
                <td>{country.name.common}</td>
                <td>{country.population}</td>
                <td>{country.area}</td>
                <td>{country.region}</td>
            </tr>)}

            </tbody>
        </table>}
    </div>)
}