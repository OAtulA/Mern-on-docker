import mongoose from "mongoose";

let chatSchema = new mongoose.Schema({
  from: String,
  to: String,
  message: Number,
},{timestamps:true});

let Chat = mongoose.model("Chat", chatSchema);

export default Chat;
