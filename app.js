const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./routes/userRoute')
const sequelize = require('./data/database')
const hostName ='localhost';
const PORT =3000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json())

app.set('views', 'views');

app.use(userRoute);

app.post('/users', userRoute);


sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running at http://${hostName}:${PORT}`);
    })
})
.catch(err => {
    console.log(err);
})