const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

let appRoutes = require('./routes/app');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'build')));
app.use('/', appRoutes);

app.listen(port);
