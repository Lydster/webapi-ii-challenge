const express = require("express");

const Posts = require(`./db.js`);

const router = express.Router();

//GET ALL POSTS

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The posts information could not be retrieved."
    });
  }
});

//GET SINGLE POST

router.get("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    console.log(post);
    if (post[0]) {
      res.status(200).json(post);
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      error: "The post information could not be retrieved."
    });
  }
});

//POST

router.post("/", async (req, res) => {
  try {
    const title = await req.body.title;
    const contents = await req.body.contents;
    if (title && contents) {
      res.status(201).json(req.body);
    } else {
      res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "There was an error while saving the post to the database"
    });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    console.log(post);
    if (post[0]) {
      Posts.remove(req.params.id);
      res.status(200).json({ message: "deleted" });
    } else {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ error: "The post could not be removed" });
  }
});

//PUT
router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    const title = req.body.title;
    const contents = req.body.contents;
    if (!title || !contents) {
      res.status(400).json({
        errorMessage: "Please provide title and contents for the post."
      });
    } else {
      Posts.update(req.params.id, req.body);
      if (post) {
        res.status(200).json(post);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist." });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "The post information could not be modified." });
  }
});

module.exports = router;
