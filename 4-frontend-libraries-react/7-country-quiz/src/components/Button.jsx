export default function Button({onClick, className, isDisabled, children}) {
    return (<button disabled={isDisabled} onClick={onClick} className={className}>{children}</button>)
}