import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  assignRole,
} from "../controllers/userController";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const app = express.Router();

app.get("/profile", isAuthenticated, getUserProfile);
app.put("/profile", isAuthenticated, updateUserProfile);
app.post("/assign-role", isAuthenticated, isAdmin("admin"), assignRole);

module.exports = app;
