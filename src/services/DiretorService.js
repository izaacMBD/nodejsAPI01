import database from '../repository/mysql.js';

async function addDiretor(nomeDiretor, nacionalidade, dtNascimento, sexo) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_usuario(nome_diretor, nacionalidade, dt_nascimento, sexo) VALUES(?,?,?,?)", 
    [nomeDiretor, nacionalidade, dtNascimento, sexo]);
    conn.end();
}

export default {addDiretor};