export default function Header({isDropClick, searchValue, headerProfile, onSearchChange, onDropClick}) {

    return (<header className="header">
        <div className="search-box">
            <input type="text" className="search-bar" placeholder='username' value={searchValue}
                   onChange={(e) => onSearchChange(e)}/>
            <div className="icon-container">
            </div>
        </div>
        {isDropClick && <button className="drop-down" onClick={onDropClick}>
            <img className="drop-down__image"
                 src={headerProfile.avatar_url}
                 alt="user's profile photo"/>
            <div className="drop-down__details">
                <h2 className="drop-down__username">{headerProfile.name}</h2>
                <p className="drop-down__bio">{headerProfile.bio}</p>
            </div>
        </button>}


    </header>)
}