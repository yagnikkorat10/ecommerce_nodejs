import { Router } from "express";
import { signup } from "../controllers/auth";

const authRoutes: Router = Router()

authRoutes.post('/signup', (req, res, next) => {
    console.log(`/signup [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass to rootRouter
}, signup)

export default authRoutes 