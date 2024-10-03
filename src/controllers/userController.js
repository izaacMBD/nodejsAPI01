import express, { request, response } from "express";
import service from '../services/userService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de usuários!!"})
});

route.post("/", async (request, response) => {
    const {name, email, password, typeUser} = request.body; //atributos da tbls

    if(password.length <= 5){
        return response.status(400).send({"message": "A senha deve conter no minímo 5 caracteres."})
    }  
    else if(typeUser.toUpperCase() != "Adm".toUpperCase() && typeUser.toUpperCase() != "Com".toUpperCase()){
        return response.status(400).send({"message": `${typeUser} não é válido, coloque Administrador ou Comum`})
    }
    
    await service.createUser(name, email, password, typeUser);

    return response.status(201).send({'message': "Usuario cadastrado com sucesso!!! 😎"})

});

route.put("/:idUser", async (request, response) => { //: siginifica que haverá uma váriavel que quero utilizar
    const {name, email, password, typeUser} = request.body; //atributos da tbls
    const {idUser} = request.params; //parâmetro, com base na 

    await service.createUser(name, email, password, typeUser, idUser);

    return response.status(201).send({'message': "Usuario atualização com sucesso!!! 😎"})
});

export default route;