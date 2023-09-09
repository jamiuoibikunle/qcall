import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/user";
import authenticateJWT from "../middlewares/authenticateJWT";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/", authenticateJWT, updateUser);
router.get("/", authenticateJWT, getUser);

export default router;
