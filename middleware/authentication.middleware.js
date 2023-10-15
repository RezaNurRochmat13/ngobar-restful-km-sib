const jwtUtil = require('../utils/jwt.util');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized access: Token not provided' });
  }

  try {
    const decodedToken = jwtUtil.decodeToken(token);
    

    if (decodedToken.role != 'admin') return res.status(401).json({ message: 'Unauthorized access' })
    
    if (req.method == 'POST' && decodedToken.role == 'admin') return next()
  
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized access' });
  }
  
};

module.exports = authenticateToken;