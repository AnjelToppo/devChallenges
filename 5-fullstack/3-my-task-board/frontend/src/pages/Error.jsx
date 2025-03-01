import AppLogo from "./../assets/Logo.svg";
import Tasks from '/tasks.jpg';

export default function Error() {

    return (<section className="home">
        <header className="home-header">
            <div className="logo-container">
                <a className="logo" href="/">
                    <img src={AppLogo} alt=""/>
                    <h1>My Task Board</h1>
                </a>
            </div>
        </header>
        <main className="home-main">
            <h1>Something went wrong!</h1>
        </main>
    </section>)
}