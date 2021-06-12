import SuggestedVideo from "../SuggestedVideo/SuggestedVideo"

function VideoList(props) {
    return(
        <section>
            <h3>Next Video</h3>
            {
            props.data.map(video =>{
                return(
                    <SuggestedVideo
                    key = {video.id}
                    video = {video}                      
                    clickHandler = {props.clickHandler}
                    />
                    )
                })
            }
        </section>
    );
}


export default VideoList