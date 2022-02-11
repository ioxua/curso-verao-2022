const pug = require("pug");
const glob = require("glob");
const fs = require("fs");
const path = require("path");

glob("src/*.pug", {
    nodir: true
}, function (er, files) {
    console.log(files);
    for (const file of files) {
        const compiledFunction = pug.compileFile(file);
        const fileName = path.basename(file, path.extname(file))

        const html = compiledFunction();
        fs.writeFileSync(`dist/${fileName}.html`, html)
    }
});
