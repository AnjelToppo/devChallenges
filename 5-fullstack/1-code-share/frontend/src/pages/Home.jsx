import {useEffect, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Error from "./Error.jsx";
import languages from "./../utils/languages.js";

export default function Home() {
    const [language, setLanguage] = useState("html");
    const [theme, setTheme] = useState("light");
    const [isShare, setIsShare] = useState(false);
    const [code, setCode] = useState(null);
    const editorRef = useRef(null);
    const navigate = useNavigate();
    const params = useParams();

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function handleEditorChange() {
        setIsShare(false);
    }

    async function handleCopyClick(text) {
        await navigator.clipboard.writeText(text);
    }

    useEffect(() => {
        async function getCode() {
            if (params.id === undefined) return;
            const url = `/api/v1/codes/${params.id}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === "success" && data.data.code) {
                setCode(data.data.code);
                setTheme(data.data.code.theme);
                setLanguage(data.data.code.language);
            }
            if (data.status === "fail") {
                setCode(data);
            }
        }
        getCode();
    }, []);

    if (code && code.status === "fail") {
        return <Error message={code.message}/>
    }

    async function handleShareClick() {
        setIsShare(true);
       let enteredCode = editorRef.current.getValue();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const url = '/api/v1/codes';
        const response = await fetch(url, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                code: enteredCode,
                theme,
                language
            })
        })
        const data = await response.json();
        if (data.status === "success") {
            setCode(data.data.code)
            navigate(`/${data.data.code._id}`)
        }
        if (data.status === "fail") {
            setCode(data)
        }
    }


    return (
        <>
            <div className="whole-editor">
                <img className="hero-img" src="/Hero-Background-notecode@2x.png" alt=""/>
                <header>
                    <a href="/"><img src="/NoteCodeLogo.svg" alt="" className="logo"/></a>
                    <div className="tag">
                        <h1 className="main-heading">Create & Share</h1>
                        <h2 className="sub-heading">Your Code easily</h2>
                    </div>
                </header>
                <main>
                    <div className="editor-container">
                        <Editor
                            theme={theme}
                            height="72rem"
                            width="100%"
                            language={language}
                            defaultValue="<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <style type='text/css'>
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type='text/javascript'>
      alert('I am a sample... visit devChallengs.io for more projects');
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type='button' value='Click me' />
  </body>
</html>"

                            value={code ? code.code:''}
                            onMount={handleEditorDidMount}
                            onChange={handleEditorChange}
                            className="editor"
                        />


                        <div className={theme === "light" ? "cta cta--light": "cta cta--dark"}>
                            <div className="language-theme">
                                <select name="language" className="language-theme__select" style={{backgroundImage: "url('/down arrow.svg')"}}
                                        onChange={(e) => setLanguage(e.target.value)} value={language}>
                                    {languages.map(language => <option key={language} value={language}>{language}</option>)}
                                </select>
                                <select name="theme" className="language-theme__select" style={{backgroundImage: "url('/down arrow.svg')"}} onChange={(e) => setTheme(e.target.value)} value={theme}>
                                    <option value="vs-dark">VS Dark</option>
                                    <option value="light">Light</option>
                                </select>
                            </div>
                            <div className="copy-share">
                                {isShare && <Link style={{backgroundImage: "url('/link.svg')"}} className="copy-share__btn copy-btn" target="_blank" to={code ? `/${code._id}`: '/'} onClick={() => handleCopyClick(window.location.href)}>{window.location.href}</Link>}
                                <button style={{backgroundImage: "url('/Share.svg')"}} className={!isShare ? "copy-share__btn share-btn" : "copy-share__btn share-btn share-btn__disabled"} disabled={isShare} onClick={handleShareClick}>Share</button>
                            </div>
                        </div>
                    </div>

                </main>

            </div>

        </>
    )
}