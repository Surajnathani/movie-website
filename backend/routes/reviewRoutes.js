import express from "express";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import {
  addReview,
  getReviewsByMovie,
  deleteReview,
} from "../controllers/reviewController.js";

const app = express.Router();

app.post("/", isAuthenticated, addReview);
app.get("/:movieId", getReviewsByMovie);
app.delete("/:id", isAuthenticated, deleteReview);

module.exports = app;
