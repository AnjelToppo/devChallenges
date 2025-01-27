import Input from "./Input.jsx";
import Content from "./Content.jsx";
import {useEffect, useState} from "react";
import countriesData from "../data/countries.js";
import refineData from "../utils/refineData.js";

let searchCountries = [];

export default function Card() {
    const [countries, setCountries] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [selectedSort, setSelectedSort] = useState("population");
    const [selectedRegion, setSelectedRegion] = useState(["Americas", "Africa", "Asia", "Europe"]);
    const [selectedStatus, setSelectedStatus] = useState(["Independent"])
    const [isLoading, setIsLoading] = useState(true);


    function handleInputChange(e) {
        // Handle user input
        if (userInput.length > 0) {
            let input = e.target.value.toLowerCase();
            searchCountries = countriesData.filter(country => country.name.common.toLowerCase().includes(input) || country.region.toLowerCase().includes(input) || country.subregion.toLowerCase().includes(input));
            let refinedCountries = refineData(searchCountries, selectedRegion, selectedStatus,selectedSort);
            setCountries(refinedCountries);
        }
        setUserInput(e.target.value)
    }

    function handleSortChange(e) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries: countries, selectedRegion, selectedStatus,selectedSort);
        setCountries(refinedCountries);
        setSelectedSort(e.target.value)
    }

    function handleRegionClick(region) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries: countries, selectedRegion, selectedStatus,selectedSort);
        setCountries(refinedCountries);
        selectedRegion.includes(region) ? setSelectedRegion(selectedRegion.filter(r => r !== region)) : setSelectedRegion(sr => [...sr, region])
    }

    function handleStatusChange(status) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries: countries, selectedRegion, selectedStatus,selectedSort);
        setCountries(refinedCountries);
        selectedStatus.includes(status) ? setSelectedStatus(selectedStatus.filter(s => s !== status)) : setSelectedStatus(ss => [...ss, status])
    }

    useEffect(() => {
        async function fetchData() {
            setCountries(countriesData)
            let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries: countriesData, selectedRegion, selectedStatus,selectedSort);
            setCountries(refinedCountries);

            setIsLoading(false);
        }

        fetchData();

    }, [selectedSort, selectedRegion, selectedStatus])

    return (<div className="card">
        <Input value={userInput} onInputChange={handleInputChange} foundData={countries.length}/>
        <Content selectedSort={selectedSort} onSortChange={handleSortChange} selectedRegion={selectedRegion}
                 onRegionClick={handleRegionClick} selectedStatus={selectedStatus} onStatusChange={handleStatusChange}
                 isLoading={isLoading} countries={countries}/>
    </div>)
}