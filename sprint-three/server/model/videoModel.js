const mongoose = require('mongoose');
const videoModel = new mongoose.Schema({
    id: String,
    title: String,
    channel: String,
    image: String,
    description: String,
    views: String,
    duration: String,
    video: String,
    timestamp: Number,
    comments: [
        {
            name: String,
            comment: String,
            id: String,
            likes: Number,
            timestamp: Number,
        }
    ],
})
module.exports = mongoose.model('videos', videoModel)