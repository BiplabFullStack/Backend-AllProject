const path = require('path');
const rootDir = path.dirname(require.main.filename);
const User = require('../models/users')


//Get Function
const getAppointmentPage = async(req, res, next)=>{
    try{
        await res.sendFile(path.join(rootDir, "views", "index.html"));
    }
    catch(err){
        console.log(err);
        res.status(500).send(err.message)
    }
}

//POST Function
const postAppointment =(req, res, next)=>{
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
        res.status(400).send(err.message)
    })

}


//Get All Data Function
const fetchAllAppointment =(req, res, next)=>{
    User.findAll()
    .then(users => {
        res.json(users)
        //console.log(res.json(users)); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err.message)
    })
}


//Delete Function
const deleteAppointment=async(req,res,next)=>{
    const id=req.params.id;
    const deleteid=await User.findByPk(id);
    try{
  
      const destruction=await deleteid.destroy();
  
      try{
        res.status(200).send("deleted")
      }catch(err){
        res.status(400).send(err.message)
      }
  
    }catch(err){
      console.log(err)
      res.status(400).send(err.message)
    }
  }
  

//Exports
  module.exports ={getAppointmentPage, postAppointment, fetchAllAppointment,deleteAppointment}

