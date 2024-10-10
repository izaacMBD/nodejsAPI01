import express, { request, response } from "express";
import service from '../services/AtorService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de atores!!"})
});

route.post("/", async (request, response) => {
    const {nomeAtor, sexo, dtNascimento} = request.body; //atributos da tbls
 
    if(sexo.toUpperCase() != "m".toUpperCase() && sexo.toUpperCase() != "f".toUpperCase()){
        return response.status(400).send({"message": `${sexo} não é válido, coloque M ou F`})
    }
    
    await service.addAtor(nomeAtor, sexo, dtNascimento);

    return response.status(201).send({'message': "Ator cadastrado com sucesso!!! 😎"})

});

route.put("/:idAtor", async (request, response) => { //: siginifica que haverá uma váriavel que quero utilizar
    const {nomeAtor, sexo, dtNascimento} = request.body; //atributos da tbls
    const {idAtor} = request.params; //parâmetro, com base na 

    await service.updateAtor(nomeAtor, sexo, dtNascimento, idAtor);

    return response.status(201).send({'message': "Ator atualizado com sucesso!!! 😎"})
});

export default route;