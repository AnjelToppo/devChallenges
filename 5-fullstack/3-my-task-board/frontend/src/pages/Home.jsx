import {useNavigate} from "react-router-dom";
import AppLogo from "./../assets/Logo.svg";
import Tasks from '/tasks.jpg';

export default function Home() {
    const navigate = useNavigate();

    async function handleCreateBoardClick() {
        const response = await fetch('/api/v1/boards', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: 'My Task Board',
                description: 'Tasks to keep organised'
            })
        });
        const data = await response.json();
        navigate(`/board/${data.data.board._id}`);
    }

    return (<section className="home">
        <header className="home-header">
            <div className="logo-container">
                <a className="logo" href="/">
                    <img src={AppLogo} alt=""/>
                <h1>My Task Board</h1>
                </a>
            </div>

            <h3 className="main-heading">Welcome to <span className="application-name">My Task Board</span> Application!</h3>
            <p className="subtitle">Conquer chaos, one board at a time. Your tasks, beautifully organized.</p>
        </header>
        <main className="home-main">
            <button className="btn main-btn" onClick={handleCreateBoardClick}>Create Your First Board</button>
            <img className="hero-img" src={Tasks} alt=""/>
            <a href="http://www.freepik.com">Image source: Designed by stories / Freepik</a>
        </main>
    </section>)
}