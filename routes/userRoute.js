const express = require('express');
const router = express.Router();

const {getAppointmentPage, postAppointment,fetchAllAppointment, deleteAppointment} = require('../controllers/userController')



//---------------------------------------------------- GET API --------------------------------------------------------------
router.get('/',getAppointmentPage)

//---------------------------------------------------- POST API -------------------------------------------------------------
router.post('/users/createUser',postAppointment)

//---------------------------------------------------- GET API --------------------------------------------------------------
router.get('/getUser',fetchAllAppointment)

//---------------------------------------------------- DELETE API -----------------------------------------------------------
router.delete('/deletedata/:id',deleteAppointment)


//Export
module.exports = router;


