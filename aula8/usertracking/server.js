const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

const handleAnalytics = (payload) => {};

app.post("/analytics", (req, res) => {
    const payload = req.body;
    console.log("analytics!", payload);
    handleAnalytics(payload)

    res.send("ok");
});

app.listen(1234, () => {
    console.log("listening");
});
