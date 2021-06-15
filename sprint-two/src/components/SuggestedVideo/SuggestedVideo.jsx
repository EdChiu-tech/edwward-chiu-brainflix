import "./SuggestedVideo.scss"


function SuggestedVideo(props) {
    let video = props.video
    return (
        <div className="video">
            <div className="video__container" onClick={() => (props.clickHandler(video))}>
                <img className="video__img" src={video.image} alt={video.name} />
            </div>
            <div className="video__desc-container">
                <h3 className="video__title">{video.title}</h3>
                <p className="video__creator">{video.channel}</p>
            </div>
        </div>
    )
}

export default SuggestedVideo