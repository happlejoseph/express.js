

import Router from "express";
import { login, Register } from "../controllers/userController.js";

const router = Router()

router.post('/register', Register)
router.post('/login', login)

export default router