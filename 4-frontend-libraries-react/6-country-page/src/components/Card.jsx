import Input from "./Input.jsx";
import Content from "./Content.jsx";
import {useEffect, useState} from "react";
import countriesData from "../data/countries.js";
import sortCountry from "../utils/sortCountry.js";

export default function Card() {
    const [countries, setCountries] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [selectedSort, setSelectedSort] = useState("population");
    const [selectedRegion, setSelectedRegion] = useState(["Americas", "Africa", "Asia", "Europe"]);
    const [selectedStatus, setSelectedStatus] = useState(["Independent"])
    const [isLoading, setIsLoading] = useState(true);

    function handleInputChange(e) {
        setUserInput(e.target.value)
    }

    function handleSortChange(e) {
        setSelectedSort(e.target.value)
    }

    function handleRegionClick(region) {
        selectedRegion.includes(region) ? setSelectedRegion(selectedRegion.filter(r => r !== region)) : setSelectedRegion(sr => [...sr, region])
    }

    function handleStatusChange(status) {
        selectedStatus.includes(status) ? setSelectedStatus(selectedStatus.filter(s => s !== status)) : setSelectedStatus(ss => [...ss, status])
    }

    console.log(countriesData.length)

    useEffect(() => {
        async function fetchData() {

            let filteredCountries = [];

            // Filter countries
            if (selectedRegion.length > 0) {
                for (let i = 0; i < selectedRegion.length; i++) {
                    filteredCountries = [...countriesData.filter(country => country.region === selectedRegion[i]), ...filteredCountries];

                }

            }
            if (selectedStatus.length === 2) {
                filteredCountries = filteredCountries.filter(country => country.unMember).filter(country => country.independent);
            }
            if (selectedStatus.includes("Independent")) {
                filteredCountries = filteredCountries.filter(country => country.independent);
            }
            if (selectedStatus.includes("Member of the United Nations")) {
                filteredCountries = filteredCountries.filter(country => country.unMember);
            }

            // Sort countries
            let sortedCountries = sortCountry(filteredCountries, selectedSort)
            // console.log(sortedCountries.length)
            setCountries(sortedCountries)
            setIsLoading(false);

        }

        fetchData();

    }, [selectedSort, selectedRegion, selectedStatus])

    return (<div className="card">
        <Input value={userInput} onInputChange={handleInputChange} foundData={countries.length}/>
        <Content selectedSort={selectedSort} onSortChange={handleSortChange} selectedRegion={selectedRegion}
                 onRegionClick={handleRegionClick} selectedStatus={selectedStatus} onStatusChange={handleStatusChange}
                 isLoading={isLoading} countries={countries} />
    </div>)
}