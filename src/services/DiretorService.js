import database from '../repository/mysql.js';

async function addDiretor(nomeDiretor, nacionalidade, dtNascimento, sexo) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) VALUES(?,?,?,?)", 
    [nomeDiretor, nacionalidade, dtNascimento, sexo]);
    conn.end();
}

async function updateDiretor(nomeDiretor, nacionalidade, dtNascimento, sexo, idDiretor) {
    const conn = await database.connectDB();
    conn.query("UPDATE tbl_diretor SET nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? WHERE id_diretor = ?", 
    [nomeDiretor, nacionalidade, dtNascimento, sexo, idDiretor]);
    conn.end();
}

export default {addDiretor, updateDiretor};