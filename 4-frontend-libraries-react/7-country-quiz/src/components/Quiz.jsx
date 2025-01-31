import Button from "./Button.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
    let questionButtons = [];
    for (let i = 1; i <= 10; i++) {
        questionButtons.push(<li key={i} className="questions-list__element">
            <Button className="btn question-btn">{i}</Button>
        </li>)
    }
    return (<main className="country-quiz__main">
        <ul className="questions-list">
            {questionButtons}
        </ul>
        <Question />
    </main>)
}