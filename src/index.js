import express from 'express'; //vai deixar eu criar uma api
import routes from './routes.js'

const server = express(); //criar um server com express
server.use(express.json());

server.use('/', routes)

server.listen(3333,()=> {
    console.log("Meu servidor está rodando!!🚀😏")
});
