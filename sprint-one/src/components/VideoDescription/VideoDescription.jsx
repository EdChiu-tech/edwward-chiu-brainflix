        
function VideoDescription (props){
    return (
        <section className = "description">
            <article className = "description__container">
                <div className = "description__header-container">
                    <h1 className = "description__header">{props.data.title}</h1>
                </div>
                <div className = "description__channel-time-container">
                    <h2 className = "description__channel">{props.data.channel}</h2>
                    <p className = "description__date">{props.data.timestamp}</p>
                </div>
                <div className = "description__views-likes-container">
                    <div className = "description__views-container">
                        <div className = "description__views-icon-container">
                            <img className = "description__views-icon" />
                        </div>
                        <p className = "description__views">{props.data.views}</p>
                    </div>
                    <div className = "description__likes-container">
                        <div className = "description__likes-icon-container">
                            <img className = "description__likes-icon" />
                        </div>
                        <p className = "description__likes">{props.data.likes}</p>
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