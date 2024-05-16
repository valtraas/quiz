import ParticlesBg from "particles-bg"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <section id="home">
            <ParticlesBg type="circle" bg={true} />
            <div className="flex justify-center h-screen flex-col items-center ">
                <p className="text-6xl text-white my-10 font-bold">Quiz App</p>
                <Link to={'/quiz'}>
                <button className="btn btn-neutral"> Start Quiz</button>

                </Link>
            </div>
            <Outlet/>
        </section>
    )
}