const express = require("express");
const mongoose = require("mongoose")
const videoRoutes = require("./routes/videos");
const commentRoutes = require("./routes/comments");
const cors = require("cors");
const app = express()

require("dotenv").config();
const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/Brainflix', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(res => {
}).catch(err => {
    console.log(Error, err.message);
})

const db = mongoose.connection
db.on("error", () => {console.error(console, "connection error:")})
db.once("open", () => {
    console.log("mongoose connection up")
})

app.use(express.json());
app.use(express.static("public"))
app.use(cors());

app.use("/api", videoRoutes);
app.use("/api", commentRoutes);

app.listen(port, () => {
    console.log(`server active on port ${port}`)
})