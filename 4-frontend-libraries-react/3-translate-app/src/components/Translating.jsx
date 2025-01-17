import sortAlfaIcon from '../assets/Sort_alfa.svg';

import Button from "./Button.jsx";
import SoundCopyButton from "./SoundCopyButton.jsx";
import Select from "./Select.jsx";
import TextArea from "./TextArea.jsx";

export default function Translating({data, updateTranslation, onTranslateClick}) {
    function handleActiveClick(button) {
        updateTranslation(draft => {
            draft.translating.detectBtn = false;
            draft.translating.englishBtn = false;
            draft.translating.frenchBtn = false;
            draft.translating.selectBtn = false;
        })
        if (button === "detect") {
            updateTranslation(draft => {
                draft.translating.detectBtn = true;
                draft.translating.code = 'autodetect';
            })
        } else if (button === "english") {
            updateTranslation(draft => {
                draft.translating.englishBtn = true;
                draft.translating.code = 'en-GB';
            })
        } else if (button === "french") {
            updateTranslation(draft => {
                draft.translating.frenchBtn = true;
                draft.translating.code = 'fr-FR';
            })
        } else if (button === "select") {
            updateTranslation(draft => {
                draft.translating.selectBtn = true;
                draft.translating.code = 'es-ES';
            })
        }
    }

    function handleSelectChange(evt) {
        updateTranslation(draft => {
            draft.translating.code = evt.target.value;
        })
    }

    function handleTextChange(evt) {
        updateTranslation(draft => {
            draft.translating.text = evt.target.value;
        })
    }

    return (<div className="translating-box box">
        <div className="languages">
            <Button onActiveClick={() => handleActiveClick("detect")} className={data.detectBtn ? "active-btn" : ""}>Detect Language</Button>
            <Button onActiveClick={() => handleActiveClick("english")} className={data.englishBtn ? "active-btn" : ""}>English</Button>
            <Button onActiveClick={() => handleActiveClick("french")} className={data.frenchBtn ? "active-btn" : ""}>French</Button>
            <Select onSelectChange={(e) => handleSelectChange(e)} onActiveClick={() => handleActiveClick("select")} className={data.selectBtn ? "active-btn" : ""} name={"translatingLanguage"} value={data.code} />
        </div>
        <hr className="box-hr"/>
        <TextArea name={"translating-text"} onTextChange={(e) => handleTextChange(e)} value={data.text}/>
        <div className="word-limit">{data.text.length}/500</div>
        <div className="box-footer">
            <SoundCopyButton/>
            <Button onActiveClick={onTranslateClick} className="translate main-btn"><img src={sortAlfaIcon} alt=""/>Translate</Button>
        </div>
    </div>)
}