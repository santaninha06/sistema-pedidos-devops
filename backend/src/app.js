const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/health', (req,res)=>{
  res.json({status:'ok'});
});

app.get('/api/pedidos', async(req,res)=>{
  try{
    const result = await pool.query(
      'SELECT * FROM pedidos'
    );

    res.json(result.rows);

  }catch(err){

    res.status(500).json({
      erro: err.message
    });

  }
});

module.exports = app;