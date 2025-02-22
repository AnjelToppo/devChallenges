import ImageUploadIcon from '../assets/exit.svg';
import {useEffect, useState} from "react";
import LinkIcon from '../assets/Link.svg';
import DownloadIcon from '../assets/download.svg';
import {saveAs} from "file-saver";
import {useNavigate, useParams} from "react-router-dom";
import Error from "../pages/Error.jsx";

export default function Main({theme}) {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const params = useParams();
    const navigate = useNavigate();


    async function handleImageInputChange(evt) {
        const imageSize = evt.target.files[0].size;
        if (imageSize > (1024 * 1024 * 2)) {
            setToastMessage('File size must be less than or equal to 2MB!');
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
            }, 3000);
            evt.target.value = null;
            return
        }
        setIsLoading(true);
        const data = new FormData();
        data.append('image', evt.target.files[0]);

        const response = await fetch('/api/v1/images', {
            method: 'POST',
            body: data
        })
        const image = await response.json();

        if (image.status === 'fail') {
            setUploadedImage(image)
        }

        if (image.status === 'success') {
            navigate(`/${image.data._id}`);
            setIsLoading(false);
        }
        evt.target.value = null;
    }

    function handleDownloadClick() {
        const imageUrl = uploadedImage.imageUrl;
        const fileName = uploadedImage.imageFileName;
        saveAs(imageUrl, fileName);
    }

    async function handleCopyClick(text) {
        await navigator.clipboard.writeText(text);
        setToastMessage('Copied successfully!');
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false)
        }, 5000);
    }

    useEffect(() => {
        async function fetchImageData() {
            const id = params.id;
            if (id === undefined) return;
            const response = await fetch(`/api/v1/images/${id}`);
            const imageData = await response.json();
            if (imageData.status === 'fail') {
                setUploadedImage(imageData)
            }
            if (imageData.status === 'success') {
                setUploadedImage(imageData.data.image);
            }
        }
        fetchImageData()
    }, [params])

    if (uploadedImage && uploadedImage.status === 'fail') {
        return <Error theme={theme} message={uploadedImage.message}/>
    }


    return (<main className="main" style={theme === "light" ? {backgroundColor: "#fff"} : {backgroundColor: "#121826"}}>
        <div className="card" style={theme === "light" ? {backgroundColor: "#F9FAFBCC"} : {backgroundColor: "#212936"}}>
            {showToast && <p className="copy-success-toast">{toastMessage}</p>}
            {!isLoading && <div className="file-uploader" style={uploadedImage ? {border: "none"} : {}}>
                {!uploadedImage && <><input onChange={(e) => handleImageInputChange(e)}
                                            className="file-uploader__input" type="file" name="image"/>
                    <div className="file-uploader__text"
                         style={theme === "light" ? {color: "#212936"} : {color: "#fff"}}>
                        <img className="upload-icon" src={ImageUploadIcon} alt="file upload icon"/>
                        <h2 className="secondary-heading">Drag & drop a file or <span
                            className="browse-files">browse files</span></h2>
                        <h3 className="tertiary-heading">JPG, PNG or GIF - Max file size 2MB</h3>
                    </div>
                </>}
                {uploadedImage && <img className="uploaded-image" src={uploadedImage.imageUrl} alt=""/>}
            </div>}
            {isLoading && <div className="progress-ui">
                <p className="progress-ui__text" style={theme === "dark" ? {color: '#F9FAFB'} : {}}><span
                    className="uploading">Uploading</span>, please wait...</p>
                <div className="progress" style={theme === "dark" ? {backgroundColor: '#4D5562'} : {}}><span
                    className="progress-value"></span></div>
            </div>}
            {uploadedImage && <div className="cta">
                <button onClick={() => handleCopyClick(window.location.href)} className="share-btn btn"><img
                    className="icon" src={LinkIcon} alt="link icon"/>Share
                </button>
                <button onClick={handleDownloadClick} className="download-btn btn"><img className="icon"
                                                                                        src={DownloadIcon}
                                                                                        alt="download icon"/>Download
                </button>
            </div>}
        </div>
    </main>)
}