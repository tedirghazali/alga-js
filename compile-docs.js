const pug = require('pug');
const glob = require("glob");
const fs = require('fs');

glob("./pug/**/*.pug", {}, function (err, files) {
    if (err) throw err;
    files.forEach(file => {
        if(file != './pug/layout.pug') {
            const renders = pug.renderFile(file);
            fs.writeFile(file.replace('./pug/', './docs/').replace('.pug', '.html'), renders.toString(), function(error) {
                if (err) throw err;
                console.log('The'+file.replace('./pug/', ' ').replace('.pug', '.html')+' file has been made!');
            });
        }
    });
})
