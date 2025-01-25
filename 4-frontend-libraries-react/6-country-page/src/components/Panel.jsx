export default function Panel({sortBy, onSortChange}) {
    return (<div className="panel">
        <div className="sort">
            <span className="panel__title">Sort by</span>
            <div className="select-container">
                <select name="sort-by" id="sort" className="sort__select" value={sortBy} onChange={(e) => onSortChange(e)} >
                    <option value="Area">Area</option>
                    <option value="Name">Name</option>
                    <option value="Population">Population</option>
                </select>
                <div className="expand-down-icon"></div>
            </div>

        </div>
        <div className="region">
            <span className="panel__title">Region</span>
            <div className="region__btn-collection">
                <button className="btn">Americas</button>
                <button className="btn">Antarctic</button>
                <button className="btn">Africa</button>
                <button className="btn">Asia</button>
                <button className="btn">Europe</button>
                <button className="btn">Oceania</button>
            </div>
        </div>
        <div className="status">
            <span className="panel__title">Status</span>
            <div className="status__input-collection">
                <label className="status__label">
                    <input type="checkbox" className="status__input" />
                    <span></span>
                    Member of the United Nations
                </label>
                <label className="status__label">
                    <input type="checkbox" className="status__input"/>
                    <span></span>
                    Independent
                </label>
            </div>
        </div>
    </div>)
}