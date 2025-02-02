import Button from "./Button.jsx";

import correctIcon from './../assets/Check_round_fill.svg';
import incorrectIcon from './../assets/Close_round_fill.svg';
import {useState} from "react";

export default function Question({questions, currentQuestion, isAttempt, userAnswers, onAnswerClick}) {
    const [userOption, setUserOption] = useState(new Array(10).fill(null));
    return (<>
        <h2 className="question"
            dangerouslySetInnerHTML={{__html: questions[currentQuestion] ? questions[currentQuestion]['ques'] : ''}}></h2>
        <div className="options">
            {questions[currentQuestion] ? questions[currentQuestion]['options'].map((option, optionBtn) => {
                let icon;
                if (questions[currentQuestion].correct === userAnswers[currentQuestion] && userAnswers[currentQuestion] === option) {
                    icon = <img src={correctIcon} alt=""/>
                }
                if (questions[currentQuestion].correct !== userAnswers[currentQuestion] && userAnswers[currentQuestion] === option) {
                    icon = <img src={incorrectIcon} alt=""/>
                }
                if (questions[currentQuestion].correct === option) {
                    icon = <img src={correctIcon} alt=""/>
                }

                return <Button
                    isDisabled={isAttempt.includes(currentQuestion)}
                    onClick={() => {
                        onAnswerClick(currentQuestion, option)
                        setUserOption((ob => {
                            ob[currentQuestion] = optionBtn
                            return ob
                        }))
                    }} key={option}
                    className={optionBtn === userOption[currentQuestion] && isAttempt.includes(currentQuestion) ? "btn option-btn option-opted" : "btn option-btn"}>{option} {isAttempt.includes(currentQuestion) && icon}</Button>
            }) : ''}
        </div>
    </>)
}