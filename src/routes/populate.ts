import { Router } from "express";
import state from "../populate/state";

const router = Router();

router.post("/state", state);

export default router;
