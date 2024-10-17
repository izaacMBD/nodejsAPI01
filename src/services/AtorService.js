import database from '../repository/mysql.js';

async function addAtor(nomeAtor, sexo, dtNascimento) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_ator(nome_ator, sexo, dt_nascimento) VALUES(?,?,?)", 
    [nomeAtor, sexo, dtNascimento]);
    conn.end();
}

async function updateAtor(nomeAtor, sexo, dtNascimento, idAtor) {
    const conn = await database.connectDB();
    conn.query("UPDATE tbl_ator SET nome_ator = ?, sexo = ?, dt_nascimento = ? WHERE id_ator = ?", 
    [nomeAtor, sexo, dtNascimento, idAtor]);
    conn.end();
}

export default {addAtor, updateAtor};