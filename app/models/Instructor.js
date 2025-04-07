import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
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
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Please specify gender"],
  },
  educationDetails: {
    type: String,
    required: [true, "Please provide your education details"],
    maxlength: [200, "Education details cannot exceed 200 characters"],
  },
  shortBio: {
    type: String,
    required: [true, "Please provide a short bio"],
    maxlength: [300, "Short bio cannot exceed 300 characters"],
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Instructor ||
  mongoose.model("Instructor", InstructorSchema);
