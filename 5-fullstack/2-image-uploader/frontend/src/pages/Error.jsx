import Header from "../components/Header.jsx";
import Home from "./Home.jsx";

export default function Error({theme, message}) {
    return (<>
    <main className="main" style={theme === "light" ? {backgroundColor: "#fff"} : {backgroundColor: "#121826"}}><div className="card error"><h1>Error</h1>
    <h2>{message}</h2>
    </div></main>
    </>)
}