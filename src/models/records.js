import mongoose, { Schema } from "mongoose";

const RecordSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    duration: {
      type: String,
      required: true,
    },
    error: {
      type: Number,
      required: true,
    },
    questionType: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model("Record", RecordSchema);
