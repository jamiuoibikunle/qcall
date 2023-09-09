import { Router } from "express";
import state from "../populate/state";
import lgas from "../populate/lgas";
import police from "../populate/police";

const router = Router();

router.post("/state", state);
router.post("/lga", lgas);
router.post("/police", police);

export default router;
