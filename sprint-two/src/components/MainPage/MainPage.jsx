import { Component } from "react"
import HeroVideo from "../HeroVideo/HeroVideo"
import VideoDescription from "../VideoDescription/VideoDescription"
import VideoList from "../VideoList/VideoList"
import DisplayComments from "../DisplayComments/DisplayComments"
import {API_URL, API_KEY} from "../../utils/utils"
import "../../App.scss"
import axios from "axios"

class MainPage extends Component {
    state = {
        videoList: [],
        currentVideo: [],
        loading: true,
    }

    getVideoById = (videoId)=>{
        axios.get(`${API_URL}/videos/${videoId}/?api_key=${API_KEY}`)
            .then(res =>{
                this.setState({
                    currentVideo: res.data,
                    loading: false,
                })
            })
            .catch(err =>{
                console.log(err)
            })
    }

    componentDidMount(){
        // 
        axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
            .then(res =>{
                this.setState({
                    videoList: res.data
                })
                this.getVideoById(this.state.videoList[0].id)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    componentDidUpdate(prevProps){
        //2

        const {videoId} = this.props.match.params;
        console.log(videoId, prevProps.match.params.videoId);
        if(videoId !== prevProps.match.params.videoId){
            this.getVideoById(videoId);
        }
        console.log(this.props.match.params)
    }

    render() {
        //0
        console.log(this.props)

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
                            data={this.state.currentVideo.comments}
                            preventDefault={this.preventDefault}
                        />
                    </div>
                    <div className="App__sidebar">
                        <VideoList
                            data={this.state.videoList}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage




    // clickHandler = (video) => {
    //     this.setState({ currentVideo: video })
    // }

    // preventDefault = (e) => {
    //     e.preventDefault()
    // }
