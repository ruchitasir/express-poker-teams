let express = require('express');
let router = express.Router();
let db = require('../models');


router.get('/',(req,res)=>{
     db.player.findAll()
    .then((players)=>{
        res.render('players/index',{players})
      })
      .catch((err)=>{
        console.log('Error',err)
        res.render('error')
      })
})

router.post('/',(req,res)=>{
    console.log(req.body)
  db.player.create(req.body)
  .then(()=>{
    res.redirect('/players')
  })
  .catch((err)=>{
    console.log('Error',err)
    res.render('error')
  })
    
})

router.get('/new',(req,res)=>{
    db.team.findAll()
  .then((teams)=>{
    res.render('players/new',{teams})
  })
  .catch((err)=>{
    console.log('Error',err)
    res.render('error')
  })
})

router.get('/:id', (req, res)=>{
    res.render('players/show');
})

module.exports = router