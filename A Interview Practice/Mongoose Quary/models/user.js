// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: {type:String, unique:true},
  age: Number,
});

const User = mongoose.model("User", userSchema);

export default User;


