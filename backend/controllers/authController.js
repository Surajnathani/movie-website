import { User } from "../model/User.js";
import { sendToken } from "../utils/feature.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({ name, email, password });
    sendToken(res, user, 201, "User created successfully");
  } catch (error) {
    res.status(500).send({ success: false, message: "Sign Up failed", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid password",
      });
    }
    sendToken(res, user, 200, `${user.name} logged in successfully`);
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Error in sign in API", error });
  }
};

const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("movie", "", { ...cookieOptions, maxAge: 0 })
      .json({
        success: true,
        message: "Logged out successfully",
      });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred while Logging the user",
    });
  }
};

const resetPassword = async (req, res) => {};
const verifyMFA = async (req, res) => {};
const googleOAuth = async (req, res) => {};

export { login, register, resetPassword, verifyMFA, googleOAuth, logout };
