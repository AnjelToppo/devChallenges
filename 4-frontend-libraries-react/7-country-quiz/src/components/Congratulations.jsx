import congratsImg from './../assets/congrats.png';

export default function Congratulations({points}) {
    return (<div className="congratulations">
            <img className="congratulations__image" src={congratsImg} alt="confetti cannons"/>
            <h1 className="congratulations__message">Congrats! You completed the quiz.</h1>
            <p className="congratulations__score">You answer {points}/10 correctly</p>
            <button className="btn play-again" onClick={() => window.location.reload()}>Play again</button>
        </div>)
}