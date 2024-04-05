import express from "express";
import cors from "cors";
import connectToDB from "./db/connection.js";
import records from "./routes/record.js";
import posts from "./routes/post.js";

const port = process.env.PORT || 5050;

const app = express();

app.use(cors());
app.use(express.json());

// Routes middleware
app.use("/record", records);
app.use("/posts", posts);

// const todoSchema = new mongoose.Schema({
//   task: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model("Todo", todoSchema);

// start the Express server
app.listen(port, () => {
  // Perform a database connection when server starts
  connectToDB(function (err) {
    if (err) console.error(err);
  });
  console.log(`Express server is running on port: ${port}`);
});
