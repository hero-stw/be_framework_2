import { Router } from "express";
import {
  addHistory, 
  getHistory
} from "../controllers/playingHistory";

const router = Router();

router.post("/history", addHistory);

router.get("/historys", getHistory);

export default router;
