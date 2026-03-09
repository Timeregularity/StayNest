// minimal Cloudinary configuration - warn if credentials are missing
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const missing = [];
if (!process.env.api_Key) missing.push('api_Key');
if (!process.env.api_Secret) missing.push('api_Secret');
if (!process.env.api_Cloud_Name) missing.push('api_Cloud_Name');
if (missing.length) {
  console.warn(`Missing Cloudinary env vars: ${missing.join(', ')}. ` +
               `Uploads may fail until these are set.`);
}

cloudinary.config({
  api_key: process.env.api_Key || '',
  api_secret: process.env.api_Secret || '',
  cloud_name: process.env.api_Cloud_Name || ''
});
console.log('cloudinary configuration:', {
  api_key: process.env.api_Key ? '[present]' : '[missing]',
  cloud_name: process.env.api_Cloud_Name || '[missing]'
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'StayNest',
    allowedFormat: ['png','jpg','jpeg'],
  }
});

module.exports = { cloudinary, storage };
