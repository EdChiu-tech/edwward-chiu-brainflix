import React from "react"

function Comments (props){
    return (
        <div className = "commentEntry">
            <div className = "commentEntry__avatar">
                <img />
            </div>
            <div className = "commentEntry__content-container">
                <div className = "commentEntry__name-date-container">
                    <h3 className = "commentEntry__name">{props.name}</h3>
                    <p className = "commentEntry__date">{props.timestamp}</p>
                </div>
                <div className = "commentEntry__comment-container">
                    <p className = "commentEntry__comment">{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comments