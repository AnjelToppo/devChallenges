import Button from "./Button.jsx";
import Question from "./Question.jsx";
import {useEffect, useState} from "react";

export default function Quiz({isAttempt, handlePoints, handleIsAttempt}) {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(10).fill(null));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch quiz questions from the API
        async function fetchQuestions() {
            await fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
                .then(response => response.json())
                .then(data => {
                    setQuestions(data.results.map(result => result.question))
                    let questions = data.results.map((result) => {
                        let incorrectOptions = result.incorrect_answers;
                        let randomIndex = Math.floor(Math.random() * incorrectOptions.length + 1);
                        let options = incorrectOptions.toSpliced(randomIndex, 0, result.correct_answer)
                        return {ques: result.question, options: options, correct: result.correct_answer}
                    });
                    setQuestions(questions)
                })
            setIsLoading(false);
        }

        fetchQuestions();
    }, []);

    let quesBtnClass = "btn question-btn";


    function handleToggleQuestionClick(currentQuestion) {
        setCurrentQuestion(currentQuestion)
    }

    function handleAnswerClick(questionIndex, answer) {
        const nextQuestion = setTimeout(() => {
            setCurrentQuestion(cq => cq + 1)
        }, 2000)
        if (currentQuestion === 9) clearTimeout(nextQuestion);
        handleIsAttempt(ia => [...ia, questionIndex]);
        setUserAnswers(ua => {
            ua[questionIndex] = answer
            return ua;
        })
        if (questions[questionIndex].correct === answer) handlePoints(p => p + 1);
    }

    return (<main className="country-quiz__main">
        {isLoading && <span className="loading">Loading...</span>}
        <ul className="questions-list">
            {questions.length > 0 && questions.map((_, i) => {

                return <li key={i} className="questions-list__element">
                    <Button
                        className={isAttempt.includes(i) || currentQuestion === i ? quesBtnClass + " completed" : quesBtnClass}
                        onClick={() => handleToggleQuestionClick(i)}>{i + 1}</Button>
                </li>
            })}
        </ul>
        <Question questions={questions} currentQuestion={currentQuestion} onAnswerClick={handleAnswerClick}
                  isAttempt={isAttempt} userAnswers={userAnswers}/>
    </main>)
}