const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const fs = require("fs");
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
    let currentVideoId = videos.find(video => video.id === currentVideo);
    return currentVideoId
}

const postVideo = (upload) => {
    let newUpload =
            {
                "id": uuid(),
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

    let newData =  [...videos, newUpload]
    let newDataJSON = JSON.stringify(newData, null, 2)
    fs.writeFile("./data/videos.json", newDataJSON,"utf8", (err, data) =>{
        console.log(data)
        if(err){
            console.log(err);
            return;
        }
        console.log("file updated")
    })
    return newDataJSON
}


router.get("/videos", (req, res) => {
    res.status(200, "video Id requested").json(getVideoSummary(videos));
})


router.get("/videos/:videoId", (req, res) => {
    res.status(200, "video id found").json(getVideoById(req))
})

router.post("/videos", (req, res) => {
    let newInfo = req.body
    res.status(201, "video uploaded").json(postVideo(newInfo));
});


module.exports = router;

