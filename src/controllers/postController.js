// postController.js

const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

exports.getAllPosts = async (req, res, next) => {
  try {
    const db = getDB();
    const posts = await db.collection('posts').find().toArray();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const post = await db.collection('posts').findOne({ _id: postId });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const db = getDB();
    const newPost = req.body;
    const result = await db.collection('posts').insertOne(newPost);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const updatedPost = req.body;
    const result = await db.collection('posts').updateOne({ _id: postId }, { $set: updatedPost });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const result = await db.collection('posts').deleteOne({ _id: postId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Other route handlers...

// Add a comment to a post
exports.addComment = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const comment = req.body.comment;
    const result = await db.collection('posts').updateOne({ _id: postId }, { $push: { comments: comment } });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Comment added successfully' });
  } catch (error) {
    next(error);
  }
};

// Get all comments for a post
exports.getComments = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const post = await db.collection('posts').findOne({ _id: postId });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post.comments);
  } catch (error) {
    next(error);
  }
};

// Like a post
exports.likePost = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const result = await db.collection('posts').updateOne({ _id: postId }, { $inc: { likes: 1 } });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post liked successfully' });
  } catch (error) {
    next(error);
  }
};

// Unlike a post
exports.unlikePost = async (req, res, next) => {
  try {
    const db = getDB();
    const postId = new ObjectId(req.params.id);
    const result = await db.collection('posts').updateOne({ _id: postId }, { $inc: { likes: -1 } });
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post unliked successfully' });
  } catch (error) {
    next(error);
  }
};
