import AppLogo from './../assets/Logo.svg';
import EditPen from './../assets/Edit_duotone.svg';

export default function Title() {
    return (
        <header className="board">
            <a href="/"><img className="icon" src={AppLogo} alt=""/></a>
            <div className="board__details">
                <h1 className="board__details--title">My Task Board</h1>
                <p className="board__details--description">Tasks to keep organised</p>
            </div>
            <button className="btn edit-btn"><img src={EditPen} alt=""/></button>
        </header>
    )
}