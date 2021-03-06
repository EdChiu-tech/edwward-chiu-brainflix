import React from "react"
import Thumbnail from "../../assets/images/Upload-video-preview.jpg"
import "./UploadPage.scss"


const UploadPage = (props) => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.history.push("/")
        alert("upload successful!")
    }
    return (
        <form className="upload" onSubmit={onSubmitHandler}>
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
                    <button className="upload__button">PUBLISH</button>
                    <button className="upload__button upload__button--cancel" onClick={(e)=>e.preventDefault()}>CANCEL</button>
                </div>
            </div>
        </form>
    )
}


export default UploadPage