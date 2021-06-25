const express = require("express");
const videoRoutes = require("./routes/videos");
const cors = require("cors");
const app = express()

require("dotenv").config();
const port = process.env.PORT ||8080;

app.use(express.json());
app.use(express.static("public"))
app.use(cors());

app.use("/api", videoRoutes);

app.listen(port, () => {
    console.log(`server active on port ${port}`)
})