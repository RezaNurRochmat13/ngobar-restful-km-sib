const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const encodedToken = (user) => {
  const token = jwt.sign(
    { email: user.email, role: user.role },
    process.env.SECRET_KEY,
    {
      expiresIn: "12h",
    }
  );

  return token;
}

const decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  return decoded;
}

module.exports = { encodedToken, decodeToken }