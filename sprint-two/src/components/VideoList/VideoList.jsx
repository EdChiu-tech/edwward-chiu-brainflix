import SuggestedVideo from "../SuggestedVideo/SuggestedVideo"
import "./VideoList.scss"

function VideoList(props) {
    return (
        <section className="videolist">
            <h3 className="videolist__header">NEXT VIDEO</h3>
            {
                props.data.map(video => {
                    return (
                        <SuggestedVideo
                            key={video.id}
                            video={video}
                            // clickHandler={props.clickHandler}
                        />
                    )
                })
            }
        </section>
    );
}


export default VideoList