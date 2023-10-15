const models = require('../models');
const User = models.User;
const bcrypt = require('bcrypt');
const jwtUtil = require('../utils/jwt.util');
const SALT_ROUND = 10;

const register = async (req, res) => {
  const { email, password, role } = req.body;

  const passwordHashed = await bcrypt.hash(password, SALT_ROUND);
  await User.create({
    email: email,
    password: passwordHashed,
    role: role
  })

  return res.json({ message: 'Registered successfully' });
}

const login = async (req, res) => {
  const { email, password } = req.body;

  const userByEmail = await User.findOne({ where: {email} })

  if (!userByEmail) return res.status(401).json({ message: 'User not registered.' })

  const checkPassword = await bcrypt.compare(password, userByEmail.password);

  if (!checkPassword) return res.status(401).json({ message: 'Unauthorized access.' });

  // Generate token nya
  const token = jwtUtil.encodedToken(userByEmail);

  return res.json({ message: 'Login successfully', token: token });

}


module.exports = {
  register,
  login
}
