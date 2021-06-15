import React from "react"
import Thumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadPage.scss"


const UploadPage = () => {
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__form-container">
                <section className="upload__thumbnail-container">
                    <h4 className="upload__label">VIDEO THUMBNAIL</h4>
                    <img className="upload__thumbnail-image" src={Thumbnail} alt="bicycle" />
                </section>
                <form className="upload__form">
                    <div className="upload__input-container">
                        <label className="upload__label">TITLE YOUR VIDEO</label>
                        <input className="upload__input-title"></input>
                    </div>
                    <div className="upload__input-container">
                        <label className="upload__label">ADD A VIDEO DESCRIPTION</label>
                        <textarea className="upload__input-description"></textarea>
                    </div>
                    <div className="upload__button-container">
                        <button className="upload__button">PUBLISH</button>
                        <button className="upload__button upload__button--cancel">CANCEL</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadPage