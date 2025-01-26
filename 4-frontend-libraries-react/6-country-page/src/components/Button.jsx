export default function Button({isSelected, onRegionClick, children}) {
    let btnClass = "btn";
    if (isSelected) {
        btnClass = btnClass + " btn__active"
    }
    return (<button className={btnClass} onClick={()=>onRegionClick(children)}>{children}</button>)
}