import Header from "./components/Header.jsx";
import {useState} from "react";
import Main from "./components/Main.jsx";

function App() {
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

export default App
