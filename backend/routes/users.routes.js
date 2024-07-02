import express from "express";
import protecRoute from "../middleware/protectRoute.js";
import { getUserForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protecRoute,getUserForSideBar);

export default router;