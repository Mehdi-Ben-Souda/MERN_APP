const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); // Make sure to require body-parser
require('dotenv').config();


const rawMaterialsRouter = require('./routes/rawMaterials');
const boxRouter = require('./routes/box');
const storeRouter = require('./routes/store');
const rackRouter = require('./routes/rack');
const refillNotificationRouter = require('./routes/refillNotification');
const { PORT } = require('./config');


const app= express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Add this line if you also want to parse URL-encoded data




app.use('/rawMaterials', rawMaterialsRouter);
app.use('/boxes', boxRouter);
app.use('/store', storeRouter);
app.use('/rack', rackRouter);
app.use('/refill', refillNotificationRouter);


app.get('/', async (req, res) => {
    console.log("Hello world")
    res.status(200).send("The req is OK")
})








mongoose.connect('mongodb://172.17.0.4:27017/myproj', 
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=>
                {
                    console.log("You have been connected sucessfully to Mongo");
                    app.listen(PORT,()=>{
                        console.log(`App is listening on the port: ${PORT}`)
                        console.log(`http://localhost:${PORT}/`)
                    });
                }
                )
            .catch((error)=>{
                console.log(error);
            })

