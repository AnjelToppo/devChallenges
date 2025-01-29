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
                                    countries,
                                    onCountryClick,
                                    curPage,
                                    totalPages,
                                    onPageClick
                                }) {


    return (<div className="card__main">
        <Panel selectedSort={selectedSort} onSortChange={onSortChange} selectedRegion={selectedRegion}
               onRegionClick={onRegionClick} selectedStatus={selectedStatus} onStatusChange={onStatusChange}/>
        <Result isLoading={isLoading} countries={countries} onCountryClick={onCountryClick}/>
        <div className="pagination">
            {curPage !== 1 && <button className="prev-btn btn" onClick={() => onPageClick("prev")}><span
                className="arrow-icon arrow-left"></span> Page {curPage - 1}
            </button>}
            {curPage < totalPages &&
                <button className="next-btn btn" onClick={() => onPageClick("next")}>page {curPage + 1} <span
                    className="arrow-icon arrow-right"></span>
                </button>}
        </div>

    </div>)
}