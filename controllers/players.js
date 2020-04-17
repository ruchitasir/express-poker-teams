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
  db.player.findOne({
    where: {id: req.params.id},
    include: [db.team]
  })
  .then(player=>{
    res.render('players/show',{player})
  })
  .catch((err)=>{
    console.log('Error',err)
    res.render('error')
  })
    
})

router.delete('/:id',(req,res)=>{
  db.player.destroy({
    where: {id: req.params.id}
  })
  .then(()=>{
    res.redirect('/players')
  })
  .catch(err=>{
    console.log('error in delete',err)
    res.render('error')
  })
})

module.exports = router