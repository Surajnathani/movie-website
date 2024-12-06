import express from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const app = express.Router();

app.post("/", isAuthenticated, isAdmin("admin"), createMovie);
app.get("/", getAllMovies);
app.get("/:id", getMovieById);
app.put("/:id", isAuthenticated, isAdmin("admin"), updateMovie);
app.delete("/:id", isAuthenticated, isAdmin("admin"), deleteMovie);

module.exports = app;
