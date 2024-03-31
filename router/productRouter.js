import express from 'express'
import { createProducts, deleteProduct, getAllProduct, updateProducts } from '../handlers/producthandler.js'

const productRouter = express.Router()

productRouter.get("/",getAllProduct)
productRouter.post("/",createProducts)
productRouter.patch("/",updateProducts)
productRouter.delete("/",deleteProduct)

export default productRouter

