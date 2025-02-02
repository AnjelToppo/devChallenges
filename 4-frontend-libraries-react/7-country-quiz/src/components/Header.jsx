export default function Header({points}) {
    return <header className="country-quiz__header">
        <h1 className="heading-1">Country Quiz</h1>
        <span className="points"><span>🏆</span> {points}/10 Points</span>
    </header>
}