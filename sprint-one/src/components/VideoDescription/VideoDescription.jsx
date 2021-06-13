import views from "../../assets/icon/Icon-views.svg"
import likes from "../../assets/icon/Icon-likes.svg"
import "./VideoDescription.scss"

function VideoDescription (props){

    let date = new Date(props.data.timestamp).toLocaleDateString("en-us", {day: "2-digit", month: "2-digit", year: "numeric"})
    
    return (
        <section className = "description">
            <article className = "description__container">
                <div className = "description__header-container">
                    <h1 className = "description__header">{props.data.title}</h1>
                </div>
                <div className = "description__channel-time-container">
                    <h2 className = "description__channel">By {props.data.channel}</h2>
                    <p className = "description__date">{date}</p>
                </div>
                <div className = "description__views-likes-container">
                    <div className = "description__views">
                        <div className = "description__views-icon-container">
                            <img className = "description__views-icon" src = {views} alt = "views icon"/>
                        </div>
                        <p className = "description__views-counter">{props.data.views}</p>
                    </div>
                    <div className = "description__likes">
                        <div className = "description__likes-icon-container">
                            <img className = "description__likes-icon" src = {likes} alt="likes icon"/>
                        </div>
                        <p className = "description__likes-counter">{props.data.likes}</p>
                    </div>
                </div>
            </article>
            <article className = "description__content-container">
                <p className = "description__content">{props.data.description}</p>
            </article> 
        </section>
    )
}

export default VideoDescription