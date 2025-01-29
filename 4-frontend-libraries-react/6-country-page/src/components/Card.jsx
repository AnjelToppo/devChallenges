import Input from "./Input.jsx";
import Content from "./Content.jsx";
import {useEffect, useState} from "react";
import refineData from "../utils/refineData.js";

const RESULT_PER_PAGE = 10;


let searchCountries = [];
// let allCountries = countriesData;

export default function Card({onCountryClick}) {
    const [allCountries, setAllCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [selectedSort, setSelectedSort] = useState("population");
    const [selectedRegion, setSelectedRegion] = useState(["Americas", "Africa", "Asia", "Europe"]);
    const [selectedStatus, setSelectedStatus] = useState(["Independent"])
    const [isLoading, setIsLoading] = useState(true);
    const [curPage, setCurPage] = useState(1);

    let start = (curPage - 1) * RESULT_PER_PAGE;
    let end = (curPage) * RESULT_PER_PAGE;
    let countriesToDisplay = countries.slice(start, end);
    let totalPages = Math.ceil(countries.length / RESULT_PER_PAGE);

    function handlePageClick(action) {
        setCurPage(n => {
            if (action === "prev") return n - 1;
            if (action === "next") return n + 1;
        })
    }


    function handleInputChange(e) {
        // Handle user input
        if (e.target.value.length > 0) {
            let input = e.target.value.toLowerCase();
            searchCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(input) || country.region.toLowerCase().includes(input) || country.subregion.toLowerCase().includes(input));
            let refinedCountries = refineData(searchCountries, selectedRegion, selectedStatus, selectedSort);
            setCountries(refinedCountries);
        } else {
            searchCountries = []
            let refinedCountries = refineData(allCountries, selectedRegion, selectedStatus, selectedSort);
            setCountries(refinedCountries);
        }
        setUserInput(e.target.value);
        setCurPage(1);
    }

    function handleSortChange(e) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries : countries, selectedRegion, selectedStatus, selectedSort);
        setCountries(refinedCountries);
        setSelectedSort(e.target.value);
        setCurPage(1);
    }

    function handleRegionClick(region) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries : countries, selectedRegion, selectedStatus, selectedSort);
        setCountries(refinedCountries);
        selectedRegion.includes(region) ? setSelectedRegion(selectedRegion.filter(r => r !== region)) : setSelectedRegion(sr => [...sr, region])
        setCurPage(1);
    }

    function handleStatusChange(status) {
        let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries : countries, selectedRegion, selectedStatus, selectedSort);
        setCountries(refinedCountries);
        selectedStatus.includes(status) ? setSelectedStatus(selectedStatus.filter(s => s !== status)) : setSelectedStatus(ss => [...ss, status])
        setCurPage(1);
    }

    useEffect(() => {
        async function fetchData() {
            let url = 'https://restcountries.com/v3.1/all';
            let fields = '?fields=flags,name,ccn3,independent,unMember,region,subregion,area,population';

            await fetch(url + fields).then(response => response.json()).then(data => {
                setAllCountries(data);
                let refinedCountries = refineData(searchCountries.length > 0 ? searchCountries : data, selectedRegion, selectedStatus, selectedSort);
                setCountries(refinedCountries);
            }).catch(err => console.log(err))


            setIsLoading(false);
        }

        fetchData();

    }, [selectedSort, selectedRegion, selectedStatus])

    return (<div className="card">
        <Input value={userInput} onInputChange={handleInputChange} foundData={countries.length}/>
        <Content selectedSort={selectedSort} onSortChange={handleSortChange} selectedRegion={selectedRegion}
                 onRegionClick={handleRegionClick} selectedStatus={selectedStatus} onStatusChange={handleStatusChange}
                 isLoading={isLoading} countries={countriesToDisplay} onCountryClick={onCountryClick} curPage={curPage}
                 totalPages={totalPages} onPageClick={handlePageClick}/>

    </div>)
}