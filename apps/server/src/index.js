import express from 'express'
const app = express()
const port = 4000
app.get('/', (req,res)=>{
    res.send('Hello from server!')
})

app.listen(port, ()=>{
    consolee.log('Sever is listenting at localhost/4000')
})

