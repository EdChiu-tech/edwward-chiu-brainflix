import React from "react"
import { Link } from "react-router-dom"
import Thumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadPage.scss"


const UploadPage = () => {
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <div className="upload__form-container">
                <div className="upload__desktop-container">
                    <section className="upload__thumbnail-container">
                        <h4 className="upload__label">VIDEO THUMBNAIL</h4>
                        <img className="upload__thumbnail-image" src={Thumbnail} alt="bicycle" />
                    </section>
                    <div className="upload__form">
                        <div className="upload__input-container">
                            <label className="upload__label" htmlFor="title">TITLE YOUR VIDEO</label>
                            <input className="upload__input-title" name="title" placeholder="Add a title to your video"></input>
                        </div>
                        <div className="upload__input-container">
                            <label className="upload__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload__input-description" name="description" placeholder="Add a description of your video"></textarea>
                        </div>
                    </div>
                </div>
                <div className="upload__button-container">
                    <Link className="upload__button">PUBLISH</Link>
                    <Link className="upload__button upload__button--cancel">CANCEL</Link>
                </div>
            </div>
        </div>
    )
}

export default UploadPage