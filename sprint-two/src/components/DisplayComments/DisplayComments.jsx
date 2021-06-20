import Comments from "../Comments/Comments"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./DisplayComments.scss"

function DisplayComments({data : comments}) {


    return (
        <section className="comments">
            <div className="comments__counter-container">
                <h3 className="comments__counter">{`${comments.length} Comments`}</h3>
            </div>
            <div className="comments__input-section">
                <div className="comments__comment-box">
                    <div>
                        <h3 className="comments__form-header">JOIN THE CONVERSATION </h3>
                    </div>
                    <div className="comments__form-container">
                        <div className="comments__avatar-container">
                            <img className="comments__avatar" src={avatar} alt="avatar" />
                        </div>
                        <form className="comments__form" onSubmit={(e)=>e.preventDefault()}>
                            <textarea className="comments__form-input" placeholder="Write comment here"></textarea>
                            <button className="comments__form-button">COMMENT</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="comments__container">
                {comments.map(comment => {
                    return (
                        <Comments
                            key={comment.id}
                            name={comment.name}
                            commentId={comment.id}
                            timestamp={comment.timestamp}
                            comment={comment.comment}
                        />
                    )
                })
                }
            </div>
        </section>
    );
}

export default DisplayComments