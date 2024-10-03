import express, { request, response } from "express";
import service from '../services/GenderService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de usuários!!"})
});

route.post("/", async (request, response) => {
    const {genero} = request.body; //atributos da tbls
    
    await service.addGender(genero);

    return response.status(201).send({'message': "Usuario cadastrado com sucesso!!! 😎"})

});

export default route;