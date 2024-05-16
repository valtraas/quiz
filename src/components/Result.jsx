import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Result = ({ userAnswers, totalQuestion, answerHistory }) => {
    const correctAnswers = userAnswers ? userAnswers.filter(answer => answer) : [];
    const wrongAnswers = userAnswers ? userAnswers.filter(answer => !answer) : [];
    const score = totalQuestion > 0 ? (correctAnswers.length / totalQuestion) * 100 : 0;

    return (
        <section id="result" className="h-screen ">
            <ParticlesBg bg={true} />
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <p className="text-3xl text-white font-bold my-5">Result</p>
                <div className="card bg-base-300 shadow-xl">
                    <div className="card-body">
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Correct</div>
                                <div className="stat-value">{correctAnswers.length}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">False</div>
                                <div className="stat-value">{wrongAnswers.length}</div>
                            </div>
                        </div>
                        <div className="glass rounded-badge my-5">
                            <p className="text-center text-2xl font-semibold">Score</p>
                            <p className="text-center text-3xl font-bold text-success">{score.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between gap-5">
                            <Link to={'/'}>
                                <button className="btn btn-neutral mt-5">Kembali</button>
                            </Link>
                            <Link to={'/history'} state={answerHistory}>
                                <button className="btn btn-neutral mt-5">Lihat History</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Result.propTypes = {
    userAnswers: PropTypes.any,
    totalQuestion: PropTypes.number,
    answerHistory: PropTypes.array
};
