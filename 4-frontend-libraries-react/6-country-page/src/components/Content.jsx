import Panel from "./Panel.jsx";
import Result from "./Result.jsx";

export default function Content({
                                    selectedSort,
                                    onSortChange,
                                    selectedRegion,
                                    onRegionClick,
                                    selectedStatus,
                                    onStatusChange,
                                    isLoading,
                                    countries
                                }) {
    return (<div className="card__main">
        <Panel selectedSort={selectedSort} onSortChange={onSortChange} selectedRegion={selectedRegion}
               onRegionClick={onRegionClick} selectedStatus={selectedStatus} onStatusChange={onStatusChange}/>
        <Result isLoading={isLoading} countries={countries}/>
    </div>)
}