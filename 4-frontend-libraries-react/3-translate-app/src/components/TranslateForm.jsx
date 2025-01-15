import soundMaxIcon from '../assets/sound_max_fill.svg';
import copyIcon from '../assets/Copy.svg';
import sortAlfaIcon from '../assets/Sort_alfa.svg';

import Translating from "./Translating.jsx";
import Translated from "./Translated.jsx";

export default function TranslateForm() {
    return (<main className="main">
        <Translating icons={{soundMaxIcon, copyIcon, sortAlfaIcon}} />
        <Translated icons={{soundMaxIcon, copyIcon, sortAlfaIcon}} />
    </main>)
}