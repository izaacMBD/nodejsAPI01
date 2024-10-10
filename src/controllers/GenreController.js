import express, { request, response } from "express";
import service from '../services/GenreService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de generos"})
});

route.post("/", async (request, response) => {
    const {genre} = request.body; //atributos da tbls
    
    await service.addGenre(genre);

    return response.status(201).send({'message': "Genero cadastrado com sucesso!!! 😎"})

});

route.put("/:idGenre", async (request, response) => { //: siginifica que haverá uma váriavel que quero utilizar
    const {genre} = request.body; //atributos da tbls
    const {idGenre} = request.params; //parâmetro, com base na 

    await service.updateGenre(genre, idGenre);

    return response.status(201).send({'message': "Genero atualizado com sucesso!!! 😎"})
});

export default route;