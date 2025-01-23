import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import {useEffect, useState} from "react";
import fetchData from "./utils/fetchData.js";


function App() {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [headerProfile, setHeaderProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [isDropClick, setIsDropClick] = useState(false);

    useEffect(() => {
        async function fetchGithubData() {
            await fetchData('https://api.github.com/users/github', setProfile)
            await fetchData('https://api.github.com/users/github/repos', setRepos)
        }

        fetchGithubData()
    }, [])

    async function handleSearchChange(e) {
        setUsername(e.target.value)
        if (e.target.value.length > 0) {
            await fetchData(`https://api.github.com/users/${e.target.value}`, setHeaderProfile)
        }

        setIsDropClick(true)
       if (headerProfile.message.includes('API rate limit exceeded')) {
           setIsDropClick(false)
       }

       if (headerProfile.message === "Not Found") {
           setIsDropClick(false)
       }


        if (e.target.value === "") {
            setIsDropClick(false)
        }
    }

    async function handleDropClick() {
        await fetchData(`https://api.github.com/users/${username}/repos`, setRepos)
        setProfile(headerProfile)
        setIsDropClick(false)
        setUsername("")
    }


    return (<>
        <Header isDropClick={isDropClick} searchValue={username} onSearchChange={handleSearchChange}
                headerProfile={headerProfile} onDropClick={handleDropClick}/>
        <Main profile={profile} repos={repos}/>
    </>)
}

export default App
