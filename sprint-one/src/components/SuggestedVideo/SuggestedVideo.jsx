import {Component} from "react"
import "./SuggestedVideo.scss"


function SuggestedVideo (props) {
    console.log(props)
    return (
    <div className = "video">
        <div className = "video__container">
            <img className = "video__img" src = {props.image} />
        </div>
        <div className = "video__desc-container">
        <h3 className = "video__title">{props.title}</h3>
        <p className = "video__creator">{props.channel}</p>
        </div>
    </div>
    )
}

export default SuggestedVideo