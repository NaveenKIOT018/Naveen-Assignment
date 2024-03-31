import express from 'express'
import cors from 'cors'
import productRouter from './router/productRouter.js'


const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use('/products', productRouter)

app.listen(3000,()=>console.log("Server Started"))



