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

app.get("/noticias/:id", (req, res) => {
    let html = fs.readFileSync('./src/pages/news.html').toString()

    const news = database.news.find(it => {
        return it.id === req.params.id
    })

    if (null === news || undefined === news) {
        res.status(404)
        res.send('Noticia nao encontrada')
    } else {
        const textAsParagraphs = news.text
            .split('\n')
            .filter(it => it !== '')
            .map(it => `<p>${it}</p>`)
            // .map(it => "<p>" + it + "</p>")
            .join('')

        console.log(textAsParagraphs)

        html = html
            .replace('$$title$$', news.title)
            .replace('$$description$$', news.description)
            .replace('$$image$$', news.image)
            .replace('$$text$$', textAsParagraphs)
    
        res.setHeader('Content-Type', 'text/html')
        res.send(html);
    }
});

app.listen(1234, () => {
    console.log("servidor iniciado!")
});
