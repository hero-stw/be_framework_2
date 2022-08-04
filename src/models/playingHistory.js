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
    total: {
        type: [
            {
                calculator: {
                    type: String,
                    require: true
                },
                inputValue: {
                    type: Number,
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
                    type: Number,
                    require: true
                }
            }
        ]
    }
  },
  { timestamp: true }
);

export default mongoose.model("History", HistorySchema);