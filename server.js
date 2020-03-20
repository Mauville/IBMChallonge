const express = require('express');
const favicon = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'build')));

app.get('/ping', function (req, res){
    res.sendFile(path.join(__dirname,'build',"index.html"));
});
app.get('/*', function (req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/cotizacion.html', function (req, res){
    res.send('POST receiverd')
});

app.listen(port);
