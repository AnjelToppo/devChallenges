import DarkThemeIcon from '../assets/Moon_fill.svg';
import LightThemeIcon from '../assets/Sun_fill.svg';
import CompanyLogo from '../assets/logo-small.svg';

export default function Header({theme, onThemeClick}) {
    return (
        <header className="header" style={theme === "light" ? {backgroundColor: "#fff", borderColor: "#E5E7EB"} : {backgroundColor: "#121826", borderColor: "#4D5562"}}>
            <div className="company-logo">
                <a className="company-logo__link" href="/">
                    <img className="company-logo__icon" src={CompanyLogo} alt="company's logo"/>
                    <h1 style={theme === "light" ? {color: "#121826"} : {color: "#fff"}}>ImageUpload</h1>
                </a>
            </div>
            <div className="theme">
                <button className="theme-btn" onClick={onThemeClick}
                        style={theme === "light" ? {backgroundColor: "#fff", borderColor: "#E5E7EB"} : {backgroundColor: "#212936", borderColor: "#4D5562"}}>
                    <img className="theme-icon" src={theme === "light" ? DarkThemeIcon : LightThemeIcon}
                         alt="theme icon"/>
                </button>
            </div>
        </header>)
}