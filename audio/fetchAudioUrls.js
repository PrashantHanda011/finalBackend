import mongoose from "mongoose";
import User from "../model/UserSchema.js";
import findPitch from "./findPitch.js";

const fetchAudioUrls = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const users = await User.find({});
    const audioUrls = users.reduce(
      (acc, cur) => [...acc, ...cur.media.audioURL],
      []
    );
    const pitches = await Promise.all(audioUrls.map(findPitch));
    console.log(pitches); // log the pitch results to the console
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

export default fetchAudioUrls;
