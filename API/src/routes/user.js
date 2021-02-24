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

// * POST COMPLETED
router.post('/',(req,res) =>{
    const {concept, amount, date, type} = req.body;
    mysqlConnection.query(`INSERT INTO user (concept,amount,date,type) VALUES('${concept}', ${amount},'${date}','${type}');`,(err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Movement Saved'});
        } else {
            console.log(err);
        }
    })
})

// * PUT DONE
router.put('/:id',(req,res) =>{
    const {id,concept, amount, date, type} = req.body;
    mysqlConnection.query(`UPDATE user SET concept = '${concept}', amount = ${amount}, date = '${date}', type = '${type}' WHERE id = ${id};`,(err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Movement Updated'});
        } else {
            console.log(err);
        }
    })
})

// * DELETE
router.delete('/:id', (req,res) =>{
    const { id } = req.params;
    mysqlConnection.query(`DELETE FROM user WHERE id = "${id}"`, (err,rows,fields) =>{
        if(!err){
            res.json({Status: 'Movement Deleted'});
        } else{
            console.log(err);
        }
    }
    )
})

module.exports = router;