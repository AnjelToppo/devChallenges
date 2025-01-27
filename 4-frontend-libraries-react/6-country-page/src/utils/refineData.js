import sortCountry from "./sortCountry.js";

export default function refineData(countriesData, selectedRegion, selectedStatus, selectedSort) {
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
    if (selectedStatus.length === 0) {
        filteredCountries = []
    }

    // Sort countries
    let sortedCountries = sortCountry(filteredCountries, selectedSort)
    return sortedCountries;
}