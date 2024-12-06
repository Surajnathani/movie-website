import { Review } from "../model/Review";

const addReview = async (req, res) => {
  try {
    const { review, rating } = req.body;
    const user = req.user;
    const movie = req.params.id;

    const reviewData = await Review.create({
      review,
      rating,
      user,
      movie,
    });

    return res.status(200).json({
      success: true,
      message: "Review created successfully",
      reviewData,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Review api" });
  }
};
const getReviewsByMovie = async (req, res) => {
  try {
    const reviews = await Review.find({ movie: req.params.movieId }).populate(
      "user"
    );
    return res.status(200).json({
      success: true,
      message: "Reviews",
      reviews,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Review api" });
  }
};
const deleteReview = async (req, res) => {
  try {
    const userId = req.user;
    const reviewId = req.params.id;

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (review.receiverId.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this review",
      });
    }

    await Review.findByIdAndDelete(reviewId);

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Review api" });
  }
};

export { addReview, getReviewsByMovie, deleteReview };
