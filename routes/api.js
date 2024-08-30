import { Router } from "express";
import AuthController from "./authController.js";

const router = Router();

router.post("/auth/regeister", AuthController.register);

export default router;
