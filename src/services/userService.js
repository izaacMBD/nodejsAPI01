import database from '../repository/mysql.js';

async function createUser(name, email, password, typeUser) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_usuario(nome, email, senha, tipo_usuario) VALUES(?,?,?,?)", 
    [name, email, password, typeUser]);
    conn.end();
}

async function updateUser(name, email, password, typeUser, idUser) {
    const conn = await database.connectDB();
    conn.query("UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ?", 
    [name, email, password, typeUser, idUser]);
    conn.end();
}

async function listUser() {
    const sql = "SELECT * FROM tbl_usuario";
    const conn = await database.connectDB;
    const {rows} = await conn.query(sql);
    conn.end();
    return rows;
}

export default {createUser, updateUser, listUser};