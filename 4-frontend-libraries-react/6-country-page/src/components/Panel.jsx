import Button from "./Button.jsx";

export default function Panel({
                                  selectedSort,
                                  onSortChange,
                                  selectedRegion,
                                  onRegionClick,
                                  selectedStatus,
                                  onStatusChange
                              }) {

    return (<div className="panel">
        <div className="sort">
            <span className="panel__title">Sort by</span>
            <div className="select-container">
                <select name="sort-by" id="sort" className="sort__select" value={selectedSort}
                        onChange={(e) => onSortChange(e)}>
                    <option value="area">Area</option>
                    <option value="name">Name</option>
                    <option value="population">Population</option>
                </select>
                <div className="expand-down-icon"></div>
            </div>

        </div>
        <div className="region">
            <span className="panel__title">Region</span>
            <div className="region__btn-collection">
                <Button isSelected={selectedRegion.includes("Americas")} onRegionClick={onRegionClick}>Americas</Button>
                <Button isSelected={selectedRegion.includes("Antarctic")}
                        onRegionClick={onRegionClick}>Antarctic</Button>
                <Button isSelected={selectedRegion.includes("Africa")} onRegionClick={onRegionClick}>Africa</Button>
                <Button isSelected={selectedRegion.includes("Asia")} onRegionClick={onRegionClick}>Asia</Button>
                <Button isSelected={selectedRegion.includes("Europe")} onRegionClick={onRegionClick}>Europe</Button>
                <Button isSelected={selectedRegion.includes("Oceania")} onRegionClick={onRegionClick}>Oceania</Button>
            </div>
        </div>
        <div className="status">
            <span className="panel__title">Status</span>
            <div className="status__input-collection">
                <label className="status__label">
                    <input type="checkbox" className="status__input"
                           checked={selectedStatus.includes("Member of the United Nations")}
                           onChange={() => onStatusChange("Member of the United Nations")}/>
                    <span></span>
                    Member of the United Nations
                </label>
                <label className="status__label">
                    <input type="checkbox" className="status__input" checked={selectedStatus.includes("Independent")}
                           onChange={() => onStatusChange("Independent")}/>
                    <span></span>
                    Independent
                </label>
            </div>
        </div>
    </div>)
}