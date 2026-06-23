import { Router } from "express";
import { getProduct } from "../controllers/product.controller.js";


const router = Router()

router.post('/add', addProducts)
router.get('/get', getProduct)

export default router