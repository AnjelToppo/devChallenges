import ImageUploadIcon from '../assets/exit.svg';

export default function Main({theme}) {
    return (<main className="main" style={theme === "light" ? {backgroundColor: "#fff"} : {backgroundColor: "#121826"}}>
        <div className="card" style={theme === "light" ? {backgroundColor: "#F9FAFBCC"} : {backgroundColor: "#212936"}}>
            <div className="file-uploader">
                <input className="file-uploader__input" type="file"/>
                <div className="file-uploader__text" style={theme === "light" ? {color: "#212936"} : {color: "#fff"}}>
                    <img className="upload-icon" src={ImageUploadIcon} alt="file upload icon"/>
                    <h2 className="secondary-heading">Drag & drop a file or <span
                        className="browse-files">browse files</span></h2>
                    <h3 className="tertiary-heading">JPG, PNG or GIF - Max file size 2MB</h3>
                </div>
            </div>

        </div>
    </main>)
}