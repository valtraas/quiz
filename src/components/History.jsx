import { useLocation } from "react-router-dom"
import ParticlesBg from "particles-bg"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
export const History = ({ questions }) => {
    const location = useLocation();
    const historyAnswers = location.state
    return (
        <section id="history">
            <ParticlesBg bg={true} />
            <div className="flex flex-col justify-center items-center h-screen">
            <p className="my-5 text-white text-3xl font-bold">History</p>
            <div className="flex gap-5 flex-wrap justify-center items-center ">
                {
                    historyAnswers.map((history, index) => {
                        const quest = questions.find(q => q.question === history.question);
                        
                        return (
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <div className="card-body">
                                    <h2 className="card-title">{index + 1}</h2>
                                    <p className="text-center text-2xl my-3">{history.question}</p>
                                    <div className="card-actions justify-center gap-5">
                                        {quest.answers.map((answer, index) => {
                                            let optionClass = 'bg-gray-200'
                                            if (answer.option === history.option) {
                                                optionClass = answer.isCorrect ? 'bg-success text-white' : 'bg-red-500 text-white'
                                            } else if (answer.isCorrect) {
                                                optionClass = 'bg-green-200'
                                            }
                                            return (
                                                <button
                                                    key={index}
                                                    className={`btn  ${optionClass} `}
                                                >
                                                    {answer.option}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to={'/'}>
                <button className="btn btn-neutral my-5">Kembali</button>
            </Link>
            </div>
        </section>
    )
}

History.propTypes = {
    questions: PropTypes.any
}