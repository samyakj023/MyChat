const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUNDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

module.exports = cloudinary;
