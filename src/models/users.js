import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
  },
  role: {
    type: String,
    default: 0,
  },
},{timestamps:true});

UserSchema.pre("save", function (next) {
  this.salt = uuidv4();
  this.password = this.encryptPassword(this.password);
  next();
});
UserSchema.methods = {
  authenticate: function (password) {
    return this.password === this.encryptPassword(password);
  },
  encryptPassword: function (password) {
    if (!password) return;
    try {
      return createHmac("sha256", this.salt).update(password).digest("hex");
    } catch (error) {
      console.log(error);
    }
  },
};

export default mongoose.model("User", UserSchema);
