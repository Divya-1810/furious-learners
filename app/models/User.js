// app\models\User.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    required: [true, "Please specify user role"],
  },
  dob: {
    type: Date,
    required: [true, "Please provide your date of birth"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Please specify gender"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide a phone number"],
    match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
