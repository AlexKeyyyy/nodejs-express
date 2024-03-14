import express from 'express'
import mongoose from "mongoose";
import postRouter from "./postRouter.js"
import fileUpload from "express-fileupload"

const PORT = 5000;
const DB_URL = 'mongodb+srv://root:root@cluster0.rfz2a3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.use(express.json())
app.use(express.static('static'));
app.use(fileUpload({}))
app.use('/api', postRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log('SERVER STARTED AT PORT ' + PORT)
        })

    } catch (e) {
        console.log(e)
    }
}

startApp();

