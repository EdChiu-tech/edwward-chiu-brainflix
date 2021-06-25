const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const videos = require("../data/videos.json");

const getVideoSummary = (videos) => {
    let videoSummaryArray = [];
    videos.forEach(video => {
        let videoSummary =
        {
            "id": video.id, 
            "title": video.title,
            "channel": video.channel,
            "image": video.image
        }
        videoSummaryArray.push(videoSummary);
    })
    return videoSummaryArray
}


const getVideoById = (vid) => {
    let currentVideo = vid.params.videoId;
    let currentVideoId = videos.filter(video => video.id === currentVideo);
    return currentVideoId
}

const postVideo = (upload) => {
    console.log(upload)
    let newUpload =
            {
                "id": uuid,
                "title": upload.title,
                "channel": "Edward",
                "image": "images/Upload-video-preview.jpg",
                "description": upload.description,
                "views": "9,999,999",
                "likes": "10",
                "duration": "1:23",
                "video": "https://project-2-api.herokuapp.com/stream",
                "timestamp": Date.now(),
                "comments": [],
            }
    videos.push(newUpload)
    return videos
}

router.get("/videos", (req, res) => {
    res.status(200).json(getVideoSummary(videos));
})


router.get("/videos/:videoId", (req, res) => {
    res.status(200).json(getVideoById(req))
})

router.post("/upload", (req, res) => {
    res.status(201).json(postVideo(req.body))
})

module.exports = router;