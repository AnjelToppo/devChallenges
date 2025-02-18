import {useState} from "react";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";

export default function Home() {
    const [theme, setTheme] = useState("light");
    function handleThemeClick() {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <>
            <Header theme={theme} onThemeClick={handleThemeClick} />
            <Main theme={theme} />
        </>
    )
}