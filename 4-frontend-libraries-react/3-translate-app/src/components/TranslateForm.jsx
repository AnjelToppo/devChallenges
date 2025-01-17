import Translating from "./Translating.jsx";
import Translated from "./Translated.jsx";

import {useImmer} from 'use-immer'


export default function TranslateForm() {
    const [translation, updateTranslation] = useImmer({
        translating: {
            detectBtn: false,
            englishBtn: true,
            frenchBtn: false,
            selectBtn: false,
            code: "en-GB",
            text: "Hello, how are you?"
        }, translated: {
            englishBtn: false, frenchBtn: true, selectBtn: false, code: "fr-FR", text: "Bonjour, comment allez-vous?"
        }
    });


    async function handleTranslateClick() {
        let langCodePair = `${translation.translating.code}|${translation.translated.code}`
        let translatingText = translation.translating.text;
        await fetch(`https://api.mymemory.translated.net/get?q=${translatingText}&langpair=${langCodePair}`)
            .then((response) => response.json())
            .then((data) => {
                updateTranslation(draft => {
                    draft.translated.text = data.responseData.translatedText;
                })

            })
            .catch((error) => {
                console.log(error)
            });
    }

    function handleSoundClick(text) {
        const synth = window.speechSynthesis;
        const voice = synth.getVoices()[3];
        const utterThis = new SpeechSynthesisUtterance(text);
        utterThis.voice = voice;
        window.speechSynthesis.cancel();
        synth.speak(utterThis);
        let r = setInterval(() => {
            if (!synth.speaking) {
                clearInterval(r);
            } else {
                synth.pause();
                synth.resume();
            }
        }, 14000);
    }

    async function handleCopyClick(text) {
        await navigator.clipboard.writeText(text);
    }

    return (<main className="main">
        <Translating updateTranslation={updateTranslation} data={translation.translating}
                     onTranslateClick={handleTranslateClick} onSoundClick={handleSoundClick} onCopyClick={handleCopyClick} />
        <Translated updateTranslation={updateTranslation} data={translation.translated}
                    onSoundClick={handleSoundClick}  onCopyClick={handleCopyClick} />
    </main>)
}