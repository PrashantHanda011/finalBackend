import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  profession: String,
  character: {
    score: Number,
    name: String,
  },
  questions: [
    // {
    //   question: String,
    //   answer: String,
    //   type: String
    // },
  ],
  media: {
    audioURL: [String],
    images: [String],
    signature: [String],
  },
});

export default mongoose.model("user", userSchema);
