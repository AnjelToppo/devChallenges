import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import Congratulations from "./components/Congratulations.jsx";

function App() {
    return (<div className="country-quiz">
        <div className="container">
            <Header/>
            <Quiz/>
            {/*<Congratulations />*/}
        </div>
    </div>)
}

export default App
