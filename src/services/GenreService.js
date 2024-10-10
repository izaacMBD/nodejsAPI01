import database from '../repository/mysql.js';

async function addGenre(genre) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_genero(genero) VALUES(?)", 
    [genre]);
    conn.end();
}

async function updateGenre(genre, idUser) {
    const conn = await database.connectDB();
    conn.query("UPDATE tbl_genero SET genero = ? WHERE id_genero = ?", 
    [genre, idUser]);
    conn.end();
}

export default {addGenre, updateGenre};