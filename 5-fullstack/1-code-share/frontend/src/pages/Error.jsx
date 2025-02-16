
export default function Error({message = 'Could not find this page!'}) {
    return (
        <>
            <div className="whole-editor">
                <img src="/Hero-Background-notecode@2x.png" alt=""/>
                <header>
                    <a href="/"><img src="/NoteCodeLogo.svg" alt="" className="logo"/></a>
                    <div className="tag">
                    <h1 className="main-heading">Create & Share</h1>
                        <h2 className="sub-heading">Your Code easily</h2>
                    </div>
                </header>
                <main className="error">
                    <h1>An error occurred!</h1>
                    <p>{message}</p>
                </main>
            </div>

        </>
    )
}