import mongoose, { Schema } from "mongoose";

const SettingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
export default mongoose.model("Settings", SettingSchema);
