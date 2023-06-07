const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = path.dirname(require.main.filename);
const User = require('../models/users')

router.get('/',(req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "index.html"));
})

router.post('/users/createUser',(req, res, next)=>{
    const name =req.body.name;
    const phone =req.body.phon;
    const email =req.body.email;
    User.create({
        name:name,
        phone:phone,
        email:email
    })
    .then((result)=>{
        console.log('Create Successfull');
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })

})

router.get('/getUser',(req, res, next)=>{
    User.findAll()
    .then(users => {
        res.json(users)
        console.log(res.json(users)); 
    })
    .catch(err => {
        console.log(err);
    })
})

router.delete('/deletedata/:id',async(req, res, next)=>{
    const id=req.params.id;
    const deleteid=await User.findByPk(id);
    try{
  
      const destruction=await deleteid.destroy();
  
      try{
        res.send("deleted")
      }catch(err){
        res.send(err.message)
      }
  
    }catch(err){
      console.log(err)
      res.status(200).send(err.message)
    }
})
    
    //     const id = req.query.id;
    // User.findByPk(id)
    // .then(user => {
    //     return user.destroy();
    // })
    // .then(result => {
    //     console.log("user deleted");
    //     res.redirect('/');
    // })
    // .catch(err => {
    //     console.log(err);
    // })
    
   
    


    // try{
    //     if(req.params.id == 'undefined'){
    //         console.log('ID is missing');
    //         return res.status(400).json({err: 'ID is missing'})
    //     }
    //     const userId = req.params.id;
    //     await User.destroy({where:{id:userId}}) 
    // }
    // catch(err){
    //     console.log(err);
    //     res.status(500).json(err)
    // }
//})

module.exports = router;


