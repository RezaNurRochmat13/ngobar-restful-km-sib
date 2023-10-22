const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: process.env.BUCKET_NAME,
  api_key: process.env.BUCKET_API_KEY,
  api_secret: process.env.BUCKET_API_SECRET
});

module.exports = cloudinary;
