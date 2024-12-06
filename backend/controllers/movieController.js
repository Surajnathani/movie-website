import Movie from "../model/Movie.js";

const createMovie = async (req, res) => {
  try {
    const userId = req.user;

    if (userId.role !== "Admin") {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const { title, description, releaseDate, duration } = new Movie(req.body);
    const movie = await Review.create({
      title,
      description,
      releaseDate,
      duration,
    });
    return res.status(200).json({
      success: true,
      message: "Movie created successfully",
      movie,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Movie api" });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("genres actors");
    return res.status(200).json({
      success: true,
      message: "Movies",
      movies,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Movie api" });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("genres actors");
    res.json(movie);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Movie api" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const userId = req.user;

    if (userId.role !== "Admin") {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ success: false, message: "Movie updated", movie });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Movie api" });
  }
};
const deleteMovie = async (req, res) => {
  try {
    const userId = req.user;

    if (userId.role !== "Admin") {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    await Movie.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: false, message: "Movie deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Movie api" });
  }
};

export { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie };
