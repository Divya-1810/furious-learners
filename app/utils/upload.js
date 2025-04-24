import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadFile(file, resourceType = 'auto') {
  try {
    if (!file) {
      throw new Error('No file provided for upload');
    }

    // Convert File to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = buffer.toString('base64');
    const dataUri = `data:${file.type};base64,${base64String}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      resource_type: resourceType,
    });

    return {
      url: result.secure_url,
      filename: result.original_filename || 'uploaded-file',
      size: result.bytes,
      mimetype: result.resource_type,
    };
  } catch (error) {
    console.error('Error in uploadFile:', error);
    throw error;
  }
} 