import exchangeIcon from '../assets/Horizontal_top_left_main.svg';

export default function Translated({icons}) {
    return (<div className="translated-box box">
        <div className="languages">
            <button className="english-lang btn">English</button>
            <button className="french-lang active-btn btn">French</button>
            <select name="langs" id="langs">
                <option value="Spanish">Spanish</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
            </select>
            <button className="btn icon-btn exchange-icon"><img src={exchangeIcon} alt=""/></button>
        </div>
        <hr className="box-hr"/>
        <textarea value="Bonjour, comment allez-vous?" className="translating-text" maxLength={500}/>
        <div className="box-footer">
            <div className="sound-copy">
                <button className="btn icon-btn"><img src={icons.soundMaxIcon} alt=""/></button>
                <button className="btn icon-btn"><img src={icons.copyIcon} alt=""/></button>
            </div>
        </div>
    </div>)
}