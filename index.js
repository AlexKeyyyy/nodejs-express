import express from 'express'

const PORT = 5000;

const app = express()

app.get('/', (req, res) => {
    console.log(res.status(200).json('Server is workingdf'))
})

app.listen(PORT, () => {
    console.log('SERVER STARTED AT PORT ' + PORT)

})