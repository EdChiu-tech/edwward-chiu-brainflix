import React from "react"
// import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./Comments.scss"

function Comments(props) {

    // let date = new Date(props.timestamp).toLocaleDateString("en-us", { day: "2-digit", month: "2-digit", year: "numeric" })

    const timeAgo = (time) => {
        let seconds = Math.floor((new Date() - time) / 1000);
        let interval = seconds / 31557600;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2629800;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    let date = timeAgo(props.timestamp)

    return (
        <div className="commentEntry">
            <div className="commentEntry__avatar-container">
                {/* <img className="commentEntry__avatar" alt=""/> */}
            </div>
            <div className="commentEntry__content-container">
                <div className="commentEntry__name-date-container">
                    <h3 className="commentEntry__name">{props.name}</h3>
                    <p className="commentEntry__date">{date}</p>
                </div>
                <div className="commentEntry__comment-container">
                    <p className="commentEntry__comment">{props.comment}</p>
                </div>
                <form className="commentEntry__button-container">
                    <button className="commentEntry__button-delete" onClick={(event) => props.handleDeleteComments(event, props.commentId)}>Delete</button>
                </form>
            </div>
        </div>
    )
}

export default Comments