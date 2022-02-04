const express = require("express");
const fs = require("fs");
const database = require("./database");
const parts = require("./parts");
const app = express();

app.get("/", function (req, res) {
    let html = fs.readFileSync('./src/pages/index.html').toString()

    let newsHtml = ''
    const news = database.news

    for (const it of news) {
        newsHtml += parts.indexNewsCard
            .replace('$$title$$', it.title)
            .replace('$$image$$', it.image)
    }

    html = html.replace('$$news$$', newsHtml)

    res.setHeader('Content-Type', 'text/html')
    res.send(html);
});

app.listen(1234, () => {
    console.log("servidor iniciado!")
});
