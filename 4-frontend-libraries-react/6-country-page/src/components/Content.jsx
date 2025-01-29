import Panel from "./Panel.jsx";
import Result from "./Result.jsx";
import {useState} from "react";

const RESULT_PER_PAGE = 10;

export default function Content({
                                    selectedSort,
                                    onSortChange,
                                    selectedRegion,
                                    onRegionClick,
                                    selectedStatus,
                                    onStatusChange,
                                    isLoading,
                                    countries,
    onCountryClick
                                }) {
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

    return (<div className="card__main">
        <Panel selectedSort={selectedSort} onSortChange={onSortChange} selectedRegion={selectedRegion}
               onRegionClick={onRegionClick} selectedStatus={selectedStatus} onStatusChange={onStatusChange}/>
        <Result isLoading={isLoading} countries={countriesToDisplay} onCountryClick={onCountryClick}/>
        <div className="pagination">
            {curPage !== 1 && <button className="prev-btn btn" onClick={() => handlePageClick("prev")}><span className="arrow-icon arrow-left"></span> Page {curPage - 1}
            </button>}
            {curPage < totalPages && <button className="next-btn btn" onClick={() => handlePageClick("next")}>page {curPage + 1} <span className="arrow-icon arrow-right"></span>
            </button>}
        </div>

    </div>)
}