import { v2 as cloudinary } from 'cloudinary';

// Log the environment variables for debugging (without exposing secrets)
console.log('Cloudinary Config from ENV:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key_exists: !!process.env.CLOUDINARY_API_KEY,
  api_secret_exists: !!process.env.CLOUDINARY_API_SECRET
});

// Try with direct values for debugging
const cloudName = 'furiouslearners'; // Try simple version without numbers
console.log('Using cloud name:', cloudName);

cloudinary.config({
  cloud_name: cloudName,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file, resourceType = 'auto') => {
  try {
    // Convert File to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    const dataUri = `data:${file.type};base64,${base64String}`;

    console.log('Attempting to upload to Cloudinary with resource type:', resourceType);

    const result = await cloudinary.uploader.upload(dataUri, {
      resource_type: resourceType,
    });

    console.log('Cloudinary upload successful');

    return {
      url: result.secure_url,
      filename: result.original_filename,
      size: result.bytes,
      mimetype: result.resource_type,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

export default cloudinary; 