import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";
import Congratulations from "./components/Congratulations.jsx";
import {useState} from "react";


function App() {
    const [points, setPoints] = useState(0);
    const [isAttempt, setIsAttempt] = useState([]);

    return (<div className="country-quiz">
        <div className="container">
            {isAttempt.length !== 10 && <Header points={points}/>}
            {isAttempt.length !== 10 &&
                <Quiz handlePoints={setPoints} isAttempt={isAttempt} handleIsAttempt={setIsAttempt}/>}
            {isAttempt.length === 10 && <Congratulations points={points}/>}
        </div>
    </div>)
}

export default App
