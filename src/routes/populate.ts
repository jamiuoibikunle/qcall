import { Router } from "express";
import state from "../populate/state";
import lgas from "../populate/lgas";
import police from "../populate/police";
import fireservice from "../populate/fireservice";
import health from "../populate/health";

const router = Router();

router.post("/state", state);
router.post("/lga", lgas);
router.post("/health", health);
router.post("/fireservice", fireservice);
router.post("/police", police);

export default router;
