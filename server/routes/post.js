import express from "express";
import Post from "../models/post.model.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  // res.status(200).json("Data: dfdgdg");
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newPost = new Post({
    name,
    description,
    date,
  });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default router;
