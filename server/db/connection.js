import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const db =
//   process.env.ATLAS_URI ||
//   "mongodb+srv://guptarajan698:d3ugOjdOKaqAnUNk@cluster0.tsn4exv.mongodb.net/blogpost_db/?retryWrites=true&w=majority&appName=Cluster0";

const db = process.env.MONGODB_URL;
console.log("MONGODB_URL", db);

mongoose.set(
  "strictQuery",
  true,
  "useNewUrlParser",
  true,
  "useUnifiedTopology",
  true
);

let conn;
const connectToDB = async (cb) => {
  try {
    conn = await mongoose.connect(db, {
      dbName: "blogpost_db",
    });
    console.log("MongoDB is Connected..." + conn.connection.host);
    // console.log(`MongoDB server is running on port: ${con.connection.port}`);
  } catch (err) {
    cb(err.message);
    process.exit(1);
  }
};

export { conn };

export default connectToDB;
