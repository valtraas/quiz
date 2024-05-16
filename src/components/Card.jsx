import PropTypes from "prop-types"
export const Card = ({ question, questionIndex, onAnswerClick }) => {
    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-xl font-bold bg-white mask mask-circle max-w-7 text-primary text-center">{questionIndex + 1}</h2>
                    <p className="text-center text-2xl my-5">{question.question}</p>
                    <div className="card-actions justify-center">
                        {question.answers.map((answer, index) => (
                            <button className="btn btn-primary text-white" key={index} onClick={() =>
                             onAnswerClick(answer.isCorrect, question.question, answer.option)}>
                                {answer.option}</button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )

}
Card.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswerClick : PropTypes.func.isRequired,
    questionIndex : PropTypes.number.isRequired
}

