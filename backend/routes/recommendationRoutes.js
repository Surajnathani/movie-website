import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { getRecommendations } from "../controllers/recommendationController.js";

const app = express.Router();

app.get("/", isAuthenticated, getRecommendations);

module.exports = app;
