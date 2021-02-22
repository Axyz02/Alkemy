const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


// * Basic router
router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM user',(err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
        }
    })
});

// * Concept query
router.get('/:concept', (req,res) =>{
    const { concept } = req.params;
    mysqlConnection.query(`SELECT * FROM user WHERE concept = "${concept}"`, (err,rows,fields) =>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    }
    )
})

// TODO Post
router.post('/',(req,res) =>{
    const {id, concept, amount, date, type} = req.body;
    mysqlConnection.query(`INSERT INTO user VALUES(${id},'${concept}', ${amount},'${date}','${type}');`)
})

// TODO PUT
// TODO DELETE
router.delete('/:concept', (req,res) =>{
    const { concept } = req.params;
    mysqlConnection.query(`DELETE FROM user WHERE concept = "${concept}"`, (err,rows,fields) =>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    }
    )
})

module.exports = router;