var sass = require('sass');
var fs = require('fs');

sass.render({
  file: 'pidie.scss',
  outputStyle: 'expanded',
  outFile: 'dist/pidie.css',
  sourceMap: true,
  includePaths: ['./scss/']
}, function(err, res) {
    if(err) {
        console.log(err.status);
        console.log(err.column);
        console.log(err.message);
        console.log(err.line);
    } else {
        fs.writeFile('dist/pidie.css', res.css, function(error) {
            if (err) throw err;
            console.log('The expanded file has been created!');
        });
        fs.writeFile('dist/pidie.css.map', res.map.toString(), function(error) {
            if (err) throw err;
            console.log('The sourceMap file has been added!');
        });
        /*console.log(res.css.toString());
        console.log(res.stats);
        console.log(res.map.toString());*/
    }
});

sass.render({
  file: 'pidie.scss',
  outputStyle: 'compressed',
  outFile: 'dist/pidie.min.css'
}, function(err, res) {
    if(err) {
        console.log(err.status);
        console.log(err.column);
        console.log(err.message);
        console.log(err.line);
    } else {
        fs.writeFile('dist/pidie.min.css', res.css, function(error) {
            if (err) throw err;
            console.log('The compressed file has been made!');
        });
        fs.writeFile('docs/pidie.min.css', res.css, function(error) {
            if (err) throw err;
            console.log('The compressed file has been added to the docs folder!');
        });
    }
});

