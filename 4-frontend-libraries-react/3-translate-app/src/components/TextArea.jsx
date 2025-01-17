export default function TextArea({name, value, onTextChange}) {
    return <textarea name={name} onChange={onTextChange} value={value} className="text-box" maxLength={500}></textarea>
}