import soundMaxIcon from '../assets/sound_max_fill.svg';
import copyIcon from '../assets/Copy.svg';

import Button from "./Button.jsx";

export default function SoundCopyButton() {
    return (<div className="sound-copy">
        <Button className="icon-btn"><img src={soundMaxIcon} alt=""/></Button>
        <Button className="icon-btn"><img src={copyIcon} alt=""/></Button>
    </div>)
}