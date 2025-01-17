export default function Button({onActiveClick, className, children}) {
    let btnClass = 'btn ' + className;
    return (<button onClick={onActiveClick} className={btnClass}>{children}</button>)
}