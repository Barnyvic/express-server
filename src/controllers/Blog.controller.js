const Blog = require("../models/Blogmodule");

// Creating a new blog
const CreatePost = async (req, res) => {
  const blog = new Blog(req.body);
  try {
    await blog.save();
    res.send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Getting  all blogs
const getPost = async (req, res) => {
  try {
    const blogs = await (
      await Blog.find()
    ).map((blog) => {
      return {
        id: blog._id,
        title: blog.title,
        body: blog.body,
        createdAt: blog.createdAt,
      };
    });
    res.send(blogs);
  } catch (error) {
    res.status(400).send(error);
  }
};

// getting a particular blog by id
const singlePost = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
  } catch (error) {
    res.status(400).send(error);
  }
};

// updating a blog
const updatePost = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(`${blog} has been updated`);
  } catch (error) {
    res.status(400).send(error);
  }
};

// deleting a blog
const deletePost = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.send(`${blog} has been deleted`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { CreatePost, getPost, singlePost, updatePost, deletePost };
