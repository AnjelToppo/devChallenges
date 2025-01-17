import languages from "../utils/languages.js";

export default function Select({value, name, onSelectChange, onActiveClick, className}) {
    const options = languages.map((language) => <option key={language.code}
                                                        value={language.code}>{language.name}</option>);
    return (<select name={name} value={value} onChange={onSelectChange} onFocus={onActiveClick} className={className}>
        {options}
    </select>)
}