const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const fs = require("fs");
const videos = require("../data/videos.json");
const videoModel = require("../model/videoModel.js")

const postComments = (vid, upload) => {
    let newComments =
    {
        "name": "Edward",
        "comment": upload.comment,
        "id": uuid(),
        "likes": 0,
        "timestamp": Date.now(),
    }
    
    
    // console.log(upload.comment)
    // console.log(newComments)
    let newData = videos
    let currentVideoData = newData.find(item => item.id ===  vid)
    // currentVideoData.comments.push(newComments)
    // console.log(currentVideoData.comments)
    let newDataComment = [... currentVideoData.comments, newComments]
    console.log(newDataComment)
    let newstuff = [...videos, newComments]
    console.log(newstuff)
    // let newVideoComment = [...videos, newDataComment]
    // console.log(newVideoComment)
    // let newDataVideoJSON = JSON.stringify(newVideoComment, null, 2)
    // console.log(newDataVideoJSON)
    // fs.writeFile("./data/videos.json", newDataVideoJSON,"utf8", (err, data) =>{
    //     console.log(data)
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("comments added")
    // })
}

router.post("/videos/:videoId/comments", (req, res) => {
    let vid = req.params.videoId
    res.status(201, "comments posted").json(postComments(vid, req.body));
});

module.exports = router;