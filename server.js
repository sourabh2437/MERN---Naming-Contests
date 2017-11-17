import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.set('view engine', 'ejs');
server.get('/', function (req, res) {
    res.render('index', {
        content: '...'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, function () {

    console.log(config.port);


});
