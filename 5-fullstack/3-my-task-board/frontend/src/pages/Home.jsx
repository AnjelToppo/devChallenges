import AppLogo from "./../assets/Logo.svg";
import Tasks from '/tasks.jpg';

export default function Home() {

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
            <button className="btn main-btn">Create Your First Board</button>
            <img className="hero-img" src={Tasks} alt=""/>
            <a href="http://www.freepik.com">Image source: Designed by stories / Freepik</a>
        </main>
    </section>)
}