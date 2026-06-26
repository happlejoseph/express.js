

import Router from "express";
import authCheck from "../middleware/authCheck.js";
import { getUser, login, Register } from "../controllers/userController.js";

const router = Router()

router.post('/register', Register)
router.post('/login', login)
router.get('/get',authCheck, getUser)

export default router