const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/angular-heroku')));

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/angular-heroku/index.html'));
});

app.listen(process.env.PORT || 8080);