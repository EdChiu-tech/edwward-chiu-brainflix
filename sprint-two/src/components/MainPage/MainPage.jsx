import { Component } from "react"
import HeroVideo from "../HeroVideo/HeroVideo"
import VideoDescription from "../VideoDescription/VideoDescription"
import VideoList from "../VideoList/VideoList"
import DisplayComments from "../DisplayComments/DisplayComments"
import { API_URL, API_KEY } from "../../utils/utils"
import axios from "axios"
import "../../App.scss"

class MainPage extends Component {
    state = {
        videoList: [],
        suggestedVideo: [],
        currentVideo: [],
        loading: true,
    }

    getVideoById = (videoId) => {
        axios.get(`${API_URL}/videos/${videoId}/?api_key=${API_KEY}`)
            .then(res => {
                this.setState({
                    currentVideo: res.data,
                    suggestedVideo: this.state.videoList.filter(video => video.id !== videoId),
                    loading: false,
                })
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmitComments = (event) => {
        const videoId = this.state.currentVideo.id
        axios.post(`${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`, { name: "User", comment: event.target.userComment.value })
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
        axios.delete(`${API_URL}/videos/${videoId}/comments/${commentId}?api_key=${API_KEY}`)
            .then(res => {
                this.getVideoById(videoId)
            })
            .catch(err => {
                console.log(err)
            })
        event.preventDefault()
    }

    componentDidMount() {
        axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
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
                            data={this.state.suggestedVideo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage

