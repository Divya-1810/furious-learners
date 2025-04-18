import mongoose from "mongoose";

const otpVerificationSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      default: () => new Date(Date.now() + 10 * 60 * 1000), // 10 mins
    },
    userData: {
      type: Object,
      required: true, // user data is stored temporarily until OTP is verified
    },
  },
  {
    timestamps: true,
  }
);

// TTL index for automatic deletion after expiration
otpVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.models.OtpVerification ||
  mongoose.model("OtpVerification", otpVerificationSchema);
