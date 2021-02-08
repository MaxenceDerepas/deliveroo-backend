const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const data = require("./data.json");

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(Process.ENV.PORT || 3100, () => {
    console.log("server started");
});
