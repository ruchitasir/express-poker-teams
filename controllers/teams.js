let express = require('express');
let router = express.Router();
let db = require('../models');

router.get('/',(req,res)=>{
    db.team.findAll()
    .then((teams)=>{
        res.render('teams/index',{teams})
      })
      .catch((err)=>{
        console.log('Error',err)
        res.render('error')
      })
  
})

router.post('/',(req,res)=>{
    console.log(req.body)
  db.team.create(req.body)
  .then(()=>{
    res.redirect('/teams')
  })
  .catch((err)=>{
    console.log('Error',err)
    res.render('error')
  })
})

router.get('/new',(req,res)=>{
    res.render('teams/new');
})
router.get('/:id', (req, res)=>{
    
    res.render('teams/show');
})

module.exports = router