import {Link} from "react-router-dom"
import "./SuggestedVideo.scss"


function SuggestedVideo({video}) {
    return (
        <div className="video">
            <Link to={`/${video.id}`}>
            <div className="video__container">
                <img className="video__img" src={video.image} alt={video.name} />
            </div>
            </Link>
            <div className="video__desc-container">
                <h3 className="video__title">{video.title}</h3>
                <p className="video__creator">{video.channel}</p>
            </div>
        </div>
    )
}

export default SuggestedVideo