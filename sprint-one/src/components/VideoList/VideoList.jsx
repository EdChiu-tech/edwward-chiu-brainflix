import {Component} from "react"
import SuggestedVideo from "../SuggestedVideo/SuggestedVideo"

function VideoList(props) {
    console.log(props)
    return(
        <section>
            {
            props.data.map(video =>{
                return(
                    <SuggestedVideo
                    id = {video.id}
                    key = {video.id}
                    image = {video.image}
                    title = {video.title}
                    channel = {video.channel}
                    />
                    )
                })
            }
        </section>
    );
}


export default VideoList