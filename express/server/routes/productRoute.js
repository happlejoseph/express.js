import { Router } from "express";
import { addProducts, getProduct } from "../controllers/product.controller.js";


const router = Router()

router.post('/add', addProducts)
router.get('/getall', getProduct)
export default router