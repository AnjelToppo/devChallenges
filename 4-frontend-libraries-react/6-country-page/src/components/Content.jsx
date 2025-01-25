import Panel from "./Panel.jsx";
import Result from "./Result.jsx";

export default function Content({sortBy, onSortChange}) {
    return (<div className="card__main">
        <Panel sortBy={sortBy} onSortChange={onSortChange} />
        <Result />
    </div>)
}