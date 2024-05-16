import ParticlesBg from "particles-bg"
import { useState } from "react"
import { Link } from "react-router-dom";
import { Result } from "./Result";
import { Card } from "./Card";
import Proptypes from 'prop-types'

export const Quiz = ({questions}) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerHistory, setAnswerHistory] = useState([])

  

    const addToAnswerHistory = (question, userAnswers,option) => {
        setAnswerHistory(prevHistory => [
            ...prevHistory,
            { question, userAnswers,option }
        ]);
    }

    const handleAnswerCLick = (isCorrect, question,option) => {
// console.log(option);
        setUserAnswers(prevAnswers => [...prevAnswers, isCorrect]);
        setQuestionIndex(questionIndex + 1);
        addToAnswerHistory(question, isCorrect,option)

    }

    return (
        <section id="quiz">
            {questionIndex < questions.length ? (
                <div>
                    <ParticlesBg bg={true} />
                    <div className="flex flex-col justify-center items-center h-screen">
                        <Card question={questions[questionIndex]} onAnswerClick={handleAnswerCLick} questionIndex={questionIndex} />
                        
                        <p className="text-white my-5"> {questionIndex + 1} of {questions.length} remaining</p>
                        <Link to={'/'}>
                            <button className="btn btn-neutral">Kembali</button>
                        </Link>
                    </div>
                </div>

            ) : (
                <div>
                    <Result userAnswers={userAnswers} totalQuestion={questions.length} answerHistory={answerHistory} />
                   
                </div>

            )}

        </section>
    )
}

Quiz.propTypes = {
    questions : Proptypes.array
}