import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a course title"],
    maxlength: [100, "Title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please provide a course description"],
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  modules: [
    {
      title: String,
      content: String,
      videoFile: {
        url: String,
        filename: String,
        size: Number,
        mimetype: String
      },
      pdfFile: {
        url: String,
        filename: String,
        size: Number,
        mimetype: String
      },
      order: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
