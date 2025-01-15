
export default function Translating({icons}) {
    return (<div className="translating-box box">
            <div className="languages">
                <button className="detect-lang btn">Detect Language</button>
                <button className="english-lang active-btn btn">English</button>
                <button className="french-lang btn">French</button>
                <select name="langs" id="langs">
                    <option value="Spanish">Spanish</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>
            <hr className="box-hr"/>
            <textarea value="Hello, how are you?" className="translating-text" maxLength={500}/>
            <div className="word-limit">19/500</div>
            <div className="box-footer">
                <div className="sound-copy">
                    <button className="btn icon-btn"><img src={icons.soundMaxIcon} alt=""/></button>
                    <button className="btn icon-btn"><img src={icons.copyIcon} alt=""/></button>
                </div>
                <button className="translate btn main-btn"><img src={icons.sortAlfaIcon} alt=""/>Translate</button>
            </div>
        </div>)
}