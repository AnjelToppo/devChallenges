export default function Input({value, onInputChange}) {
    return (<div className="card__header">
        <span className="found-data">Found 250 countries</span>
        <div className="input-container">
            <input value={value} onChange={(e) => onInputChange(e)} type="text" className="user-input" placeholder="Search by Name, Region, Subregion"/>
            <span className="search-icon"></span>
        </div>

    </div>)
}