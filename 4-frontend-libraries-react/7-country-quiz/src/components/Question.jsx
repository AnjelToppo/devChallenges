import Button from "./Button.jsx";

export default function Question() {
    return (<>
            <h2 className="question">Which country does this 🇩🇪 belong to?</h2>
        <div className="options">
            <Button className="btn option-btn">Sweden</Button>
            <Button className="btn option-btn">Sweden</Button>
            <Button className="btn option-btn">Sweden</Button>
            <Button className="btn option-btn">Sweden</Button>
        </div>
        </>)
}