import { Router } from "express";
import migrateDB from "../../config/migrate";

const router = Router();

router.post("/state", migrateDB.states);

export default router;
