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
        await fetch("https://api.mymemory.translated.net/get", {
            method: "POST", body: JSON.stringify({
                q: translation.translating.text, langpair: langCodePair,
            }), headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.log(error)
            });

    }


    return (<main className="main">
        <Translating updateTranslation={updateTranslation} data={translation.translating}
                     onTranslateClick={handleTranslateClick}/>
        <Translated updateTranslation={updateTranslation} data={translation.translated}/>
    </main>)
}