const express = require('express')
const mainRoute = require('./router/routes')
const bodyparser = require('body-parser');
const connectDB = require('./connction');
const path = require('path')
const { body,validationResult } = require('express-validator');
const { userdbs, visits } = require('./models/model');



const app = express()
const port = 3000

connectDB();

app.use(mainRoute);
app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})