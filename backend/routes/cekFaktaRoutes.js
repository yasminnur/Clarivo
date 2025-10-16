import express from "express";
import { cekFaktaHandler } from "../controllers/cekFaktaController.js";

const router = express.Router();

router.post("/", cekFaktaHandler);

export default router;
