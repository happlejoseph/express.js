

import express from 'express'
const app = express()

import dotenv from 'dotenv'
import connection from './config/db.js'
dotenv.config()




const port = process.env.PORT

connection()


app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
    
})