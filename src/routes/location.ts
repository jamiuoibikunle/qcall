import { Router } from "express";
import { getLocation } from "../controllers/location";

const router = Router();

router.get("/", getLocation);

export default router;
