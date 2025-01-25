import Input from "./Input.jsx";
import Content from "./Content.jsx";
import {useState} from "react";

export default function Card() {
    const [userInput, setUserInput] = useState("");
    const [sortBy, setSortBy] = useState("Population");

    function handleInputChange(e) {
        setUserInput(e.target.value)
    }

    function handleSortChange(e) {
        setSortBy(e.target.value)
    }
    return (<div className="card">
        <Input value={userInput} onInputChange={handleInputChange} />
        <Content sortBy={sortBy} onSortChange={handleSortChange} />
    </div>)
}