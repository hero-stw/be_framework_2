import { Router } from "express";
import {
  addHistory, 
  getHistory,
  getHistorys
} from "../controllers/playingHistory";

const router = Router();

router.post("/history", addHistory);

router.get("/historys", getHistorys);

router.get("/history/:_id", getHistory);

export default router;
