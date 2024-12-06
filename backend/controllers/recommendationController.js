const getRecommendations = async (req, res) => {
  try {
    const recommendations;
    return res.status(200).json({
      success: true,
      message: "Recommendation",
      recommendations,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error in Recommendation api" });
  }
};

export { getRecommendations };
