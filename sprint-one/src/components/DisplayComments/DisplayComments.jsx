import {Component} from "react"
import Comments from "../Comments/Comments"

class DisplayComments extends Component{
    render(){
            return(
        <section className = "comments">
            <div className = "comments__counter-container">
                <h3 className = "comments__counter">{`${this.props.data.length} Comments`}</h3>
            </div>
            <div className = "comments__input-section">
                <div className = "comments__avatar-container">
                    <img />
                </div>
                <div className = "comments__form-container">
                    <form className = "comments__form">
                        <label className = "comments__form-header" htmlFor = "comments">JOIN THE CONVERSATION</label>
                        <textarea className = "comments__form-input"></textarea>
                            <div>
                                <button className = "comments__form-button">COMMENT</button>
                            </div>
                    </form>
                </div>
            </div>
            <div className = "comments__container">
                {this.props.data.map(comment =>{
                    return(
                        <Comments
                        key ={comment.id}
                        name = {comment.name}
                        commentId = {comment.id}
                        timestamp = {comment.timestamp}
                        comment = {comment.comment}
                        />
                        )
                    })
                }
               </div>
        </section>
        );
    }
}

export default DisplayComments