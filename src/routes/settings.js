import { Router } from "express";
import { getSettings, updateSettings } from "../controllers/settings";

const router = Router();

router.get("/settings", getSettings);

router.post("/settings", async (req, res) => {});

router.get("/settings/:id", async (req, res) => {});

router.put("/settings/:id", updateSettings);

router.delete("/settings/:id", async (req, res) => {});

export default router;
