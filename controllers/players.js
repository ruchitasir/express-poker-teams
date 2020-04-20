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

router.put('/:id',(req,res)=>{
  console.log(req.body)
  db.player.update(
    req.body, 
    {where: {id: req.params.id}}
  )
  .then(()=>{
      res.redirect('/players/'+req.params.id)
  })
  .catch(function(error) {
    console.log(error)
    res.status(400).render('main/404')
  })
})

router.get('/:id/edit',(req,res)=>{
  db.team.findAll()
  .then(teams=>{
     db.player.findOne({
       where: {id: req.params.id}
     })
     .then(player=>{
       res.render('players/edit',{ teams, player })
     })
     .catch(function(error) {
       console.log(error)
       res.status(400).render('main/404')
     })
  })
  .catch(function(error) {
   console.log(error)
   res.status(400).render('main/404')
 })
})


module.exports = router