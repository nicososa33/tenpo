// Basic connection
const { Pool } = require('pg');

const config = {
    host: 'localhost',
    user: 'docker',
    password: 'docker',
    database: 'postgres'
};

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from usuarios');
        // console.log(res)
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUser = async () => {
    try {
        const text = 'INSERT INTO usuarios(username, password) VALUES ($1, $2)';
        const values = ['john', 'john1234'];

        const res = await pool.query(text, values);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const deleteUser = async () => {
    try {
        const text = 'DELETE FROM usuarios WHERE username = $1';
        const value = ['john'];
        const res = await pool.query(text, value);
        console.log(res)
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const editUser = async () => {
    const text = 'UPDATE usuarios SET username = $1 WHERE username = $2';;
    const values = ['John', 'ryan'];
    const res = await pool.query(text, values);
    console.log(res)
    pool.end();
};

editUser();