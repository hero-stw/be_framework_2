import { Router } from "express";
import {
  addRecord,
  deleteRecord,
  getRecord,
  getRecords,
  getRecordsByTypeWithSort,
  updateRecord,
} from "../controllers/records";

const router = Router();

router.get("/records", getRecords);

router.post("/records", addRecord);

router.get("/record/:id", getRecord);

router.put("/record/:id", updateRecord);

router.delete("/record/:id", deleteRecord);

export default router;
