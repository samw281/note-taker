
const fs = require('fs');
const router = require('express').Router();

// path '/api/notes';
router.post('/notes', (req,res)=>{
    fs.readFile('../db/db.json','utf8', function(err, data){
        if (err){ throw err};
        console.log(data);
    })
})

module.exports = router;