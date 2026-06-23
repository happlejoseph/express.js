import { Router } from "express";
import { addProducts, getProduct, singleProduct } from "../controllers/product.controller.js";


const router = Router()

router.post('/add', addProducts)
router.get('/getall', getProduct)
router.get('/single', singleProduct)
export default router