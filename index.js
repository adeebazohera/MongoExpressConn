const express = require('express')
const app = express()
const path = require('path')
const collection = require("./mongo")
const tmpPath = path.join(__dirname,"./views")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine',"hbs")
app.get('/', (req,res)=>{
    res.render('home')
})
app.post('/sendMsg',async(req,res)=>{
    const msg = req.body.msg
    await collection.insertMany([{msg}])
    res.send("sent")
})
app.get('/all', async (req, res) => {
    try {
    const allCol = await collection.find();
    res.json(allCol);
    } catch (error) {
    console.error('Error retrieving users:', error.message);
    res.status(500).send('Error retrieving users');
    }
});
app.listen(3000,()=>{
    console.log("port connected")
})
