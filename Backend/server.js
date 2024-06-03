const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

// Настройка подключения к базе данных PostgreSQL
const db = new Pool({
    host: process.env.POSTGRES_HOST || 'localhost',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'qwerty312',
    database: process.env.POSTGRES_DB || 'levchdb',
    port: 5432, // порт по умолчанию для PostgreSQL
});

// Тестовый маршрут для проверки работы сервера
app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

// Маршрут для получения продуктов
app.get('/products', async (req, res) => {
    const sql = 'SELECT * FROM products';
    try {
        const { rows } = await db.query(sql);
        return res.json(rows);
    } catch (err) {
        return res.json(err);
    }
});

// Запуск сервера на порту 8081
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});




/*
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

// Настройка подключения к базе данных PostgreSQL
const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'qwerty312',
    database: 'levchdb',
    port: 5432, // порт по умолчанию для PostgreSQL
});

// Тестовый маршрут для проверки работы сервера
app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

// 
app.get('/products', async (req, res) => {
    const sql = 'SELECT * FROM products';
    try {
        const { rows } = await db.query(sql);
        return res.json(rows);
    } catch (err) {
        return res.json(err);
    }
});

// Запуск сервера на порту 8081
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
*/