import React from "react"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./Comments.scss"

function Comments (props){

    let date = new Date(props.timestamp).toLocaleDateString("en-us", {day: "2-digit", month: "2-digit", year: "numeric"})

    return (
        <div className = "commentEntry">
            <div className = "commentEntry__avatar-container">
                <img className = "commentEntry__avatar" />
            </div>
            <div className = "commentEntry__content-container">
                <div className = "commentEntry__name-date-container">
                    <h3 className = "commentEntry__name">{props.name}</h3>
                    <p className = "commentEntry__date">{date}</p>
                </div>
                <div className = "commentEntry__comment-container">
                    <p className = "commentEntry__comment">{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comments