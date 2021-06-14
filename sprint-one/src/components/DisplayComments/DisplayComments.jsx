import Comments from "../Comments/Comments"
import avatar from "../../assets/images/Mohan-muruge.jpg"
import "./DisplayComments.scss"

function DisplayComments (props){

        return (
            <section className="comments">
                <div className="comments__counter-container">
                    <h3 className="comments__counter">{`${props.data.length} Comments`}</h3>
                </div>
                <div className="comments__input-section">
                    <div className="comments__comment-box">
                        <div>
                            <h3 className="comments__form-header">JOIN THE CONVERSATION </h3>
                        </div>
                        <div className="comments__form-container">
                            <div className="comments__avatar-container">
                                <img className="comments__avatar" src={avatar} alt="avatar picture" />
                            </div>
                            <form className="comments__form" onSubmit={props.preventDefault}>
                                <textarea className="comments__form-input" placeholder="Write comment here"></textarea>
                                <div>
                                    <button className="comments__form-button">COMMENT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="comments__container">
                    {props.data.map(comment => {
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