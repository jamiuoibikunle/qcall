import { Router } from "express";
import state from "../populate/state";
import lgas from "../populate/lgas";

const router = Router();

router.post("/state", state);
router.post("/lga", lgas);

export default router;
