import express from "express";
import { controller } from "../controller/controller.js";

const router = express.Router();

router.get("/home", controller);

export default router