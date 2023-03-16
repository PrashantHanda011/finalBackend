import User from "../model/UserSchema.js";

// Return a list of all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return a single user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new user
export const register = async (req, res, next) => {
  const user = new User({
    name,
    email,
    age,
    gender,
    profession,
    character,
    media,
  });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

// Update a user by ID
export const updateUserById = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.age != null) {
      user.age = req.body.age;
    }
    if (req.body.gender != null) {
      user.gender = req.body.gender;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.profession != null) {
      user.profession = req.body.profession;
    }
    if (req.body.character != null) {
      user.character = req.body.character;
    }
    if (req.body.questions != null) {
      user.questions = req.body.questions;
    }
    if (req.body.media != null) {
      user.media = req.body.media;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
