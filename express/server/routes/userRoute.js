

import Router from "express";
import authCheck from "../middleware/authCheck.js";
import { getEmployee, login, Register } from "../controllers/userController.js";

const router = Router()

router.post('/register', Register)
router.post('/login', login)
router.get('/get', authCheck, getEmployee)

export default router