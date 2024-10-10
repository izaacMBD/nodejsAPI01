import express, { request, response } from "express";
import service from '../services/userService.js';

const route = express.Router();

route.get("/",(request, response) =>{
    return response.status(200).send({"message": "Deu certo a listagem de usuários!!"})
});

route.post("/", async (request, response) => {
    const {name, email, password, typeUser} = request.body; //atributos da tbls

    if(password.length <= 5){
        return response.status(400).send({"message": "A senha deve conter mais que 5 caracteres."})
    }  
    else if(typeUser.toUpperCase() != "administrador".toUpperCase() && typeUser.toUpperCase() != "comum".toUpperCase()){
        return response.status(400).send({"message": `${typeUser} não é válido, coloque 'administrador' ou 'comum'`})
    }
    
    await service.createUser(name, email, password, typeUser);

    return response.status(201).send({'message': "Usuario cadastrado com sucesso!!! 😎"})

});

route.put("/:idUser", async (request, response) => { //: siginifica que haverá uma váriavel que quero utilizar
    const {name, email, password, typeUser} = request.body; //atributos da tbls
    const {idUser} = request.params; //parâmetro, com base na 

    await service.updateUser(name, email, password, typeUser, idUser);

    return response.status(201).send({'message': "Usuario atualizado com sucesso!!! 😎"})
});

export default route;