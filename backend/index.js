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
const router = express.Router()

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








mongoose.connect('mongodb://localhost:27017/myproj', 
            { useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=>
                {
                    console.log("You have been connected sucessfully to Mongo");
                    app.listen(8099,()=>{
                        console.log(`App is listening on the port: ${8099}`)
                        console.log(`http://localhost:${8099}/`)
                    });
                }
                )
            .catch((error)=>{
                console.log(error);
            })

