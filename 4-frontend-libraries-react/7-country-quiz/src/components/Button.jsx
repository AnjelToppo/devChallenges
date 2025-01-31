import correctIcon from './../assets/Check_round_fill.svg';
import incorrectIcon from './../assets/Close_round_fill.svg';

export default function Button({className, children}) {
    return (<button className={className}>{children}</button>)
}