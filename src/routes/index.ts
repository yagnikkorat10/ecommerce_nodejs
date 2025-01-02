import { Router } from "express";
import authRoutes from "./auth";

const rootRouter: Router = Router();

rootRouter.use('/auth', (req, res, next) => {
    console.log(`/auth [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass to rootRouter
}, authRoutes);

export default rootRouter;