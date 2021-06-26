import Comments from "../Comments/Comments"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./DisplayComments.scss"

function DisplayComments({ data, handleSubmitComments, handleDeleteComments }) {
    console.log(typeof(data))
    return (
        <section className="comments">
            <div className="comments__counter-container">
                <h3 className="comments__counter">{`${data.comments.length} Comments`}</h3>
            </div>
            <div className="comments__input-section">
                <div className="comments__comment-box">
                    <div>
                        <h3 className="comments__form-header"> JOIN THE CONVERSATION </h3>
                    </div>
                    <div className="comments__form-container">
                        <div className="comments__avatar-container">
                            <img className="comments__avatar" src={avatar} alt="avatar" />
                        </div>
                        <form className="comments__form" onSubmit={handleSubmitComments}>
                            <textarea className="comments__form-input" placeholder="Write comment here" name="userComment"></textarea>
                            <button className="comments__form-button">COMMENT</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="comments__container">
            {data.comments.map(comment => {
                    return (
                        <Comments
                            key={comment.id}
                            name={comment.name}
                            commentId={comment.id}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                            handleDeleteComments={handleDeleteComments}
                        />
                    )
                })
                }
            </div>
        </section>
    );
}

export default DisplayComments

// {
//     data.comments.sort((a, b) => {
//         return b.timestamp - a.timestamp
//     }).map(comment => {
//         return (
//             <Comments
//                 key={comment.id}
//                 name={comment.name}
//                 commentId={comment.id}
//                 timestamp={comment.timestamp}
//                 comment={comment.comment}
//                 handleDeleteComments={handleDeleteComments}
//             />
//         )
//     })
// }