const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM user',(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    })
});

router.get('/:concept', (req,res) =>{
    const { concept } = req.params;
    mysqlConnection.query(`SELECT * FROM user WHERE concept = "?"`,[concept], (err,rows,fields) =>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    }
    )
})

module.exports = router;