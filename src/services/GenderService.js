import database from '../repository/mysql.js';

async function addGender(genero) {
    const conn = await database.connectDB();
    conn.query("INSERT INTO tbl_genero(genero) VALUES(?)", 
    [genero]);
    conn.end();
}

export default {addGender};