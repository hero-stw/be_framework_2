import mongoose, { Schema } from "mongoose";

const RecordSchema = new Schema(
  {
    userId: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    timelapse: {
      type: String,
      required: true,
    },
    error: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model("Record", RecordSchema);
