import { Router } from "express";
import { loginUser, registerUser, updateUser } from "../controllers/user";
import authenticateJWT from "../middlewares/authenticateJWT";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/", authenticateJWT, updateUser);

export default router;
