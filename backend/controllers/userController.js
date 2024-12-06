import { User } from "../model/User";

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    if (!user)
      return res
        .status(404)
        .send({ success: false, message: "User not found" });

    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in getting user profile",
      error,
    });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user;
    const { name, email } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    const emailExist = await User.findOne({ email, _id: { $ne: userId } });

    if (emailExist) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const updates = {
      name: name || user.name,
      email: email || user.email,
    };

    const hasChanges = Object.keys(updates).some(
      (key) => updates[key] !== user[key]
    );

    if (!hasChanges) {
      return res.status(200).json({
        success: false,
        message: "No changes",
      });
    }

    Object.assign(user, updates);

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error in update API",
      error,
    });
  }
};

const assignRole = async (req, res) => {
  try {
    const { userId, role } = req.body;
    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    return res.status(200).json({
      success: true,
      message: "Role updated successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getUserProfile, updateUserProfile, assignRole };
