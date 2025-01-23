import Nesting from '../assets/Nesting.svg';
import Star from '../assets/Star.svg';
import Chield from '../assets/Chield_alt.svg';
import {useState} from "react";


export default function Main({profile, repos}) {
    const [isAllRepoClicked, setIsAllRepoClicked] = useState(false);

    let fourCard = [];
    let lessThanFourCard = [];
    let allCard = [];

    function cardTemplate(repos, cardArr, loopEnd) {
        for (let i = 0; i < loopEnd; i++) {
            cardArr.push(<a key={repos[i].name} href={repos[i].html_url} className="repository__card"
                            target="_blank">
                <h2 className="repository__name">{repos[i].name}</h2>
                <p className="repository__description">{repos[i].description}</p>
                <div className="repository__details">
                    <div className="repository__stats">
                        {repos[i].license && <span className="repository__stats--licence"><img src={Chield}
                                                                                               alt="licence-icon"/>{repos[i].license.spdx_id}</span>}
                        <span className="repository__stats--fork"><img src={Nesting}
                                                                       alt="fork-icon"/>{repos[i].forks}</span>
                        <span className="repository__stats--star"><img src={Star}
                                                                       alt="star-icon"/>{repos[i].stargazers_count}</span>
                    </div>
                    <div className="repository__updated">
                        updated 3 days ago
                    </div>
                </div>
            </a>)
        }
    }


    if (repos.length < 4) {
        cardTemplate(repos, lessThanFourCard, repos.length)
    } else if (repos.length > 0) {
        cardTemplate(repos, fourCard, 4)
    }

    if (repos.length > 0) {
        cardTemplate(repos, allCard, repos.length)
    }

    function handleClick() {
        setIsAllRepoClicked(!isAllRepoClicked)
    }


    return (<main className="main">
        <div className="container">
            <div className="profile">
                <div className="profile__image-container">
                    <img
                        src={profile ? profile.avatar_url : ""}
                        alt="user's profile photo" className="profile__image"/>
                </div>

                <div className="profile__info">
                    <div className="profile__info--followers">
                        <span className="profile__info--title">Followers</span>
                        <span className="profile__info--description">{profile ? profile.followers : 0}</span>
                    </div>
                    <div className="profile__info--following">
                        <span className="profile__info--title">Following</span>
                        <span className="profile__info--description">{profile ? profile.following : 0}</span>
                    </div>
                    <div className="profile__info--location">
                        <span className="profile__info--title">Location</span>
                        <span className="profile__info--description">{profile ? profile.location : ""}</span>
                    </div>
                </div>
            </div>
            <div className="username-bio">
                <h1 className="username">{profile ? profile.name : ""}</h1>
                <p className="bio">{profile ? profile.bio : ""}</p>
            </div>
            <div className="repository">
                {!isAllRepoClicked && fourCard}
                {isAllRepoClicked && allCard}
                {repos.length < 4 && lessThanFourCard}
            </div>
            <div className="all-repositories">
                {!(repos.length < 4) && <button className="all-repo-btn"
                                                onClick={handleClick}>{isAllRepoClicked ? "Hide repositories" : "View all repositories"}</button>}
            </div>
        </div>


    </main>)
}