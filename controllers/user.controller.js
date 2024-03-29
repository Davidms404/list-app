const User = require('../src/models/User.js');
const jwt = require('jsonwebtoken');
const config = require('../src/config.js');

module.exports.signup = async (req, res) => {
  const { name, email, password, confirmedPassword } = req.body;

  if (password.length < 4) {
    return res.status(400).json({ error: "Password must be at least 4 characters" });
  }

  if (password !== confirmedPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  const emailFound = await User.findOne({ email: email });

  if (emailFound) {
    console.log(emailFound);
    return res.status(409).json({ error: "The email you are trying to use is already in use" });
  }

  try {
    const newUser = new User({ name, email, password });
    newUser.password = await newUser.encrypPassword(password);
    const savedUser = await newUser.save();

    console.log("id de la cuenta creada: ", savedUser._id);
    
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400 
    });

    return res.status(201).json({ message: "Account created successfully", token: token });
  } catch (error) {
    return  res.status(500).json({ error: error });
  }
}

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email: email });

  if (!userFound) {
    return res.status(409).json({ error: "Email not found" });
  }

  const correctPassword = await userFound.checkPassword(password);

  if (!correctPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }

  try {
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400
    });

    return res.json({ token });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}