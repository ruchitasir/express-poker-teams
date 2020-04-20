let express = require('express');
let router = express.Router();
let db = require('../models');
let sequelize = require('sequelize')

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
  db.team.findOne({
    where: {id: req.params.id},
    include: [db.player]
  })
  .then((team)=>{
    res.render('teams/show',{team})
  })
  .catch((err)=>{
    console.log('Error',err)
    res.render('error')
  })
 
})
router.get('/:id/edit',(req,res)=>{
  db.team.findOne({
    where: { id: req.params.id }
  })
  .then(function(team) {
    if (!team) throw Error()
    
       res.render('teams/edit', { team: team })
    
  })
  .catch(function(error) {
    console.log(error)
    res.status(400).render('main/404')
  })
  
})

router.put('/:id',(req,res)=>{
  db.team.update({
    name: req.body.name,
    description: req.body.description,
    pic:req.body.pic
  }, {
    where: {
      id: req.body.id
    }
  }).then(function(team) {
    // do something when done updating
    res.redirect('/teams/'+req.body.id)
  })
 
})

router.delete('/:id',(req,res)=>{
 db.player.destroy({
   where: {teamId: req.params.id}
 })
 .then(()=>{
          db.team.destroy({
            where: {id: req.params.id}
          })
          .then(()=>{
            res.redirect('/teams')
          })
          .catch(err=>{
            console.log("Error in delete teams",err)
            res.render('error')
          })
 })
 .catch(err=>{
  console.log("Error in delete teams",err)
  res.render('error')
 })

})


router.get('/:id/win',(req,res)=>{
  //res.send('win stub')
  db.player.update(
    {wins: sequelize.literal('wins + 1')},
    {where: {teamId: req.params.id}}
  )
  .then(()=>{
    res.redirect('/teams')
  })
  .catch(function(error) {
    console.log(error)
    res.status(400).render('main/404')
  })

})
-
router.get('/:id/loss',(req,res)=>{
  db.player.update(
    {losses: sequelize.literal('losses + 1')},
    {where: {teamId: req.params.id}}
  )
  .then(()=>{
    res.redirect('/teams')
  })
  .catch(function(error) {
    console.log(error)
    res.status(400).render('main/404')
  })
})

module.exports = router