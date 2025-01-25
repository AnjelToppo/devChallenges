

export default function Header() {


    return (<header className="header">
        <div className="container">
            <img className="header__hero-image" src="/hero-image-sm.jpg"
                 srcSet="/hero-image-sm.jpg 960w, /hero-image.jpg 1280w"
                 sizes="(max-width: 1100px) 960px" alt="View of the Earth from space"/>
            <img className="header__logo" src="/Logo.svg" alt="Website's logo" />
        </div>

    </header>)
}