import { Router } from "express";
import migrateDB from "../../config/migrate";

const router = Router();

router.post("/state", migrateDB.states);
router.post("/lgas", migrateDB.lgas);

export default router;
