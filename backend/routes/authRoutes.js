import express from "express";
import {
  login,
  register,
  resetPassword,
  verifyMFA,
  googleOAuth,
  logout,
} from "../controllers/authController.js";

const app = express.Router();

app.post("/register", register);
app.post("/login", login);
app.get("/logout", logout);
app.post("/reset-password", resetPassword);
app.post("/verify-mfa", verifyMFA);
app.get("/google-oauth", googleOAuth);

module.exports = app;
