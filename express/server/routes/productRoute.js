import { Router } from "express";
import { addProducts, deleteProduct, getProduct, singleProduct, updateProduct } from "../controllers/product.controller.js";


const router = Router()

router.post('/add', addProducts)
router.get('/getall', getProduct)
router.get('/single', singleProduct)
router.put('/update', updateProduct)
router.delete('/delete', deleteProduct)
export default router