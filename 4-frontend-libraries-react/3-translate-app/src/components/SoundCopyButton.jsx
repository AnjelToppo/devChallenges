import soundMaxIcon from '../assets/sound_max_fill.svg';
import copyIcon from '../assets/Copy.svg';

import Button from "./Button.jsx";

export default function SoundCopyButton({onSoundClick, onCopyClick}) {
    return (<div className="sound-copy">
        <Button onActiveClick={onSoundClick} className="icon-btn"><img src={soundMaxIcon} alt=""/></Button>
        <Button onActiveClick={onCopyClick} className="icon-btn"><img src={copyIcon} alt=""/></Button>
    </div>)
}