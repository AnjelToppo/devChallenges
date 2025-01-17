import exchangeIcon from '../assets/Horizontal_top_left_main.svg';
import SoundCopyButton from "./SoundCopyButton.jsx";
import Select from "./Select.jsx";
import Button from "./Button.jsx";
import TextArea from "./TextArea.jsx";

export default function Translated({data, updateTranslation}) {
    function handleActiveClick(button) {
        updateTranslation(draft => {
            draft.translated.englishBtn = false;
            draft.translated.frenchBtn = false;
            draft.translated.selectBtn = false;
        })

        if (button === "english") {
            updateTranslation(draft => {
                draft.translated.englishBtn = true;
                draft.translated.code = 'en-GB';
            })
        } else if (button === "french") {
            updateTranslation(draft => {
                draft.translated.frenchBtn = true;
                draft.translated.code = 'fr-FR';
            })
        } else if (button === "select") {
            updateTranslation(draft => {
                draft.translated.selectBtn = true;
                draft.translated.code = 'es-ES';
            })
        }
    }

    function handleSelectChange(evt) {
        updateTranslation(draft => {
            draft.translated.code = evt.target.value;
        })
    }

    function handleTextChange(evt) {
        updateTranslation(draft => {
            draft.translated.text = evt.target.value;
        })
    }

    function handleExchangeClick() {
        updateTranslation(draft => {
            let translatingCode = draft.translating.code;
            let translatedCode = draft.translated.code;

            let translatingText = draft.translating.text;
            let translatedText = draft.translated.text;

            if (draft.translating.code === 'autodetect') return;
            if (draft.translating.code === draft.translated.code) return;

            if (draft.translating.code === 'en-GB') {
                draft.translated.englishBtn = true;
                draft.translating.englishBtn = false;
            }
            if (draft.translating.code === 'fr-FR') {
                draft.translated.frenchBtn = true;
                draft.translating.frenchBtn = false;
            }
            if (draft.translated.code === 'en-GB') {
                draft.translated.englishBtn = false;
                draft.translating.englishBtn = true;
            }
            if (draft.translated.code === 'fr-FR') {
                draft.translating.frenchBtn = true;
                draft.translated.frenchBtn = false;
            }

            draft.translating.code = translatedCode;
            draft.translating.text = translatedText;
            draft.translated.code = translatingCode;
            draft.translated.text = translatingText;

            if (draft.translating.selectBtn && draft.translated.selectBtn) {
                return
            }

            if (draft.translating.selectBtn) {
                draft.translating.selectBtn = false;
                draft.translated.selectBtn = true;
                return
            }

            if (draft.translated.selectBtn) {
                draft.translated.selectBtn = false;
                draft.translating.selectBtn = true;
            }
        })
    }

    return (<div className="translated-box box">
        <div className="languages">
            <Button onActiveClick={() => handleActiveClick("english")} className={data.englishBtn ? "active-btn": ""}>English</Button>
            <Button onActiveClick={() => handleActiveClick("french")} className={data.frenchBtn ? "active-btn": ""}>French</Button>
            <Select onSelectChange={(e) => handleSelectChange(e)} onActiveClick={() => handleActiveClick("select")} className={data.selectBtn ? "active-btn": ""} name={"translatedLanguage"} value={data.code} />
            <Button onActiveClick={handleExchangeClick} className="icon-btn exchange-icon"><img src={exchangeIcon} alt=""/></Button>
        </div>
        <hr className="box-hr"/>
        <TextArea name={"translated-text"} onTextChange={(e) => handleTextChange(e)} value={data.text} />
        <div className="box-footer">
            <SoundCopyButton />
        </div>
    </div>)
}