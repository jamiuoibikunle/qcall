import { Router } from "express";
import migrateDB from "../../config/migrate";

const router = Router();

router.post("/state", migrateDB.states);
router.post("/lgas", migrateDB.lgas);
router.post("/user", migrateDB.users);
router.post("/police", migrateDB.police);

export default router;
