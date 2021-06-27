import { Component } from "react"
import HeroVideo from "../../components/HeroVideo/HeroVideo"
import VideoDescription from "../../components/VideoDescription/VideoDescription"
import VideoList from "../../components/VideoList/VideoList"
import DisplayComments from "../../components/DisplayComments/DisplayComments"
import { API_URL } from "../../../utils/utils"
import axios from "axios"
import "../../../App.scss"

class MainPage extends Component {
    state = {
        videoList: [],
        suggestedVideos: [],
        currentVideo: [],
        loading: true,
    }

    getVideoById = (videoId) => {
        axios.get(`${API_URL}/videos/${videoId}`)
            .then(res => {
                this.setState({
                    currentVideo: res.data,
                    suggestedVideos: this.state.videoList.filter(video => video.id !== videoId),
                    loading: false,
                })
                console.log(this.state.suggestedVideos)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmitComments = (event) => {
        const videoId = this.state.currentVideo.id
        axios.post(`${API_URL}/videos/${videoId}/comments`, { name: "User", comment: event.target.userComment.value })
            .then(res => {
                this.getVideoById(videoId)
                event.target.userComment.value=""
            })
            .catch(err => {
                console.log(err)
            })
        event.preventDefault()
    }

    handleDeleteComments = (event, commentId) => {
        const videoId = this.state.currentVideo.id
        axios.delete(`${API_URL}/videos/${videoId}/comments/${commentId}`)
            .then(res => {
                this.getVideoById(videoId)
            })
            .catch(err => {
                console.log(err)
            })
        event.preventDefault()
    }

    componentDidMount() {
        axios.get(`${API_URL}/videos`)
            .then(res => {
                this.setState({
                    videoList: res.data
                })
                if (this.props.match.url === "/") {
                    this.getVideoById(this.state.videoList[0].id)
                } else {
                    this.getVideoById(this.props.match.params.videoId)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        const { videoId } = this.props.match.params;
        if (this.props.match.url === "/" && videoId !== prevProps.match.params.videoId) {
            this.getVideoById(this.state.videoList[0].id)
        } else if (videoId !== prevProps.match.params.videoId) {
            this.getVideoById(videoId);
        }
    }

    render() {

        if (this.state.loading === true) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <HeroVideo
                    currentVideo={this.state.currentVideo}
                />
                <div className="App__divider-container">
                    <div className="App__main-content">
                        <VideoDescription
                            data={this.state.currentVideo}
                        />
                        <DisplayComments
                            data={this.state.currentVideo}
                            preventDefault={this.preventDefault}
                            handleSubmitComments={this.handleSubmitComments}
                            handleDeleteComments={this.handleDeleteComments}
                        />
                    </div>
                    <div className="App__sidebar">
                        <VideoList
                            data={this.state.suggestedVideos}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage

