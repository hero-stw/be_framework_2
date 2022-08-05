import mongoose, { Schema } from "mongoose";

const HistorySchema = new Schema(
  {
    userId: {
      type: String,
      require: true
    },
    userName: {
      type: String,
      require: true
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
    total: {
        type: [
            {
                calculator: {
                    type: String,
                    require: true
                },
                inputValue: {
                    type: String,
                    require: true
                },
                correctResult: {
                    type: Number,
                    require: true
                },
                marginOfError: {
                    type: Number,
                    require: true
                },
                time: {
                    type: String,
                    require: true
                }
            }
        ]
    }
  },
  { timestamp: true }
);

export default mongoose.model("History", HistorySchema);
