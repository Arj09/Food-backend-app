const express  = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require("./middleware/errorhandler");
const connectDB = require('./dbConfig/dbConnection');
const cors = require('cors')



connectDB()
const app = express()


const port = process.env.PORT || 5001
app.use(cors())
app.use(express.json());
app.use("/api/food", require('./router/foodRouter'))
app.use(errorHandler)

app.listen(port, (req, res)=>{
    console.log("server is running on port : ", port)
})