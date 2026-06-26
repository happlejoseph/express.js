import { Router } from "express";
import { addProducts, deleteProduct, getProduct, singleProduct, updateProduct } from "../controllers/product.controller.js";
import upload from "../middleware/upload.js";
import authCheck from "../middleware/authCheck.js";


const router = Router()

router.post('/add',upload.single("image"), addProducts)
router.get('/getall', getProduct)
router.get('/single', singleProduct)
router.put('/update', updateProduct)
router.delete('/delete', deleteProduct)

export default router