import express, { request, response } from "express";
import service from '../services/DiretorService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de usuários!!"})
});

route.post("/", async (request, response) => {
    const {nomeDiretor, nacionalidade, dtNascimento, sexo} = request.body; //atributos da tbls
 
    if(sexo.toUpperCase() != "m".toUpperCase() && sexo.toUpperCase() != "f".toUpperCase()){
        return response.status(400).send({"message": `${sexo} não é válido, coloque M ou F`})
    }
    
    await service.addDiretor(nomeDiretor, nacionalidade, dtNascimento, sexo);

    return response.status(201).send({'message': "Diretor cadastrado com sucesso!!! 😎"})

});

route.put("/:idDiretor", async (request, response) => { //: siginifica que haverá uma váriavel que quero utilizar
    const {nomeDiretor, nacionalidade, dtNascimento, sexo} = request.body; //atributos da tbls
    const {idDiretor} = request.params; //parâmetro, com base na 

    await service.updateDiretor(nomeDiretor, nacionalidade, dtNascimento, sexo, idDiretor);

    return response.status(201).send({'message': "Diretor atualizado com sucesso!!! 😎"})
});

export default route;